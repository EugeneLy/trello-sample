import React, { Component } from 'react';
import { connect } from 'react-redux';
import HTML5Backend from 'react-dnd-html5-backend';
import { DragDropContext } from 'react-dnd';

import { getBoards } from '../actions/board.js';
import { getTasks } from '../actions/task.js';
import { changeTaskList, swapTask } from '../actions/task.js';
import Header from './Header/Header.jsx';
import Board from './Board/Board.jsx';
import AddBoardForm from "./AddBoardForm/AddBoardForm.jsx";

import SignIn from './Modals/SignIn.jsx';
import Registration from './Modals/Registration.jsx';
import Info from './Modals/Info.jsx';

import './App.scss'

class App extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.props.getTasks();
        this.props.getBoards();
    }

    render() {
        const { changeTaskList, swapTask } = this.props;

        return (
            <div className="content">
                <Header />
                <div className="desk">

                    {this.props.boards.map((board,index) =>
                        <Board
                            key={index}
                            board={board}
                            drop={changeTaskList}
                            swap={swapTask}
                            tasks={this.props.tasks}
                        />
                    )}

                    {this.props.authenticated ?
                        <div className="list-group"> <AddBoardForm /></div>
                        :null
                    }
                </div>

                <SignIn />
                <Registration />
                <Info />
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        boards: state.boards,
        tasks: state.tasks.collection,
        authenticated: state.auth.authenticated
    };
}

export default DragDropContext(HTML5Backend)
               (connect(mapStateToProps, {changeTaskList, swapTask, getBoards, getTasks })(App));
