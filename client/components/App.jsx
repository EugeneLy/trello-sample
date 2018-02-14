import React, { Component } from 'react';
import { connect } from 'react-redux';

import Header from './Header/Header.jsx';
import Board from './Board/Board.jsx';

import './App.scss'
import api from "../api";

class App extends Component {
    constructor(props) {
        super(props);
        this.fetchTasks = this.fetchTasks.bind(this);
        this.handleTaskAdd = this.handleTaskAdd.bind(this);
        this.handleTaskDelete = this.handleTaskDelete.bind(this);
        this.handleBoardAdd = this.handleBoardAdd.bind(this);
        this.handleBoardDelete = this.handleBoardDelete.bind(this);
        this.handleTaskEdit = this.handleTaskEdit.bind(this);
    }

    fetchTasks() {
        api.getTasks()
            .then(({ data }) => {
                this.props.onLoadTasks(data);
            });
    }

    handleTaskEdit(task) {
        api.editTask(task)
            .then(() => {
                this.fetchTasks();
            }).catch(err =>
                console.error(err)
            );
    }

    handleTaskAdd(task) {
        api.createTask(task)
            .then(() =>
                this.fetchTasks()
            )
            .catch(err =>
                console.error(err)
            );
    }

    handleTaskDelete(task) {
        console.log(task._id);
        api.removeTask(task._id)
            .then(() =>
                this.fetchTasks()
            )
            .catch(err =>
                console.error(err)
            );
    }

    /*Handle boards load*/
    fetchBoards() {
        api.getBoards()
            .then(({ data }) => {
                this.props.onLoadBoards(data);
            });
    }

    handleBoardAdd(board) {
        api.createBoard(board)
            .then(() =>
                this.fetchBoards()
            )
            .catch(err =>
                console.error(err)
            );
    }

    handleBoardDelete(board) {
        console.log(board._id);
        api.removeBoard(board._id)
            .then(() =>
                this.fetchBoards()
            )
            .catch(err =>
                console.error(err)
            );
    }

    componentWillMount() {
        this.fetchBoards();
        this.fetchTasks();
    }
    render() {
        return (
            <div className="content">
                <Header />
                <Board
                    onTaskAdded={this.handleTaskAdd}
                    onTaskDelete={this.handleTaskDelete}
                    onTaskEdit={this.handleTaskEdit}
                    onBoardAdded={this.handleBoardAdd}
                    onBoardDelete={this.handleBoardDelete}
                    tasks={this.props.tasks}
                    boards={this.props.boards}
                />
            </div>
        )
    }
}

export default  connect(
    state => ({
        tasks: state.tasks,
        boards: state.boards
    }),
    dispatch => ({
        onLoadTasks:(tasksCollection) => {
            dispatch({type: 'LOAD_TASKS_SUCCESS', payload: tasksCollection})
        },
        onLoadBoards: (boardsCollection) => {
            dispatch({type: 'LOAD_BOARDS_SUCCESS', payload: boardsCollection})
        }
    })
)(App);
