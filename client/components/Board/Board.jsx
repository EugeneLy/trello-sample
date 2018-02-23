import React, { Component } from 'react';
import { connect } from 'react-redux';

import Task from "../Task/Task.jsx";
import AddBoardForm from "../AddBoardForm/AddBoardForm.jsx";
import ToggleTaskForm from "../ToggleFormButton/ToggleFormButton.jsx";

import { getTasks } from '../../actions/task.js';
import { getBoards, removeBoard } from '../../actions/board.js';

import './board.scss';

class Board extends Component {
    constructor(props) {
        super(props);
    }

    handleRemoveBoard(boardId) {
        this.props.removeBoard(boardId);
    }

    componentWillMount() {
        this.props.getBoards();
        this.props.getTasks();
    }

    render() {
        return (
            <div>
                {this.props.boards.map((board,index) =>
                    <div className="list-group" key={index}>
                        <h2 className="title">{board.title}
                            <div className="delete" onClick={this.handleRemoveBoard.bind(this)}>
                                <i className="far fa-trash-alt"></i>
                            </div>
                        </h2>

                        {this.props.tasks.map((task,index) =>
                            task.boardId !== board._id ? null :
                                <Task key={index}
                                  task={task}
                            >
                            </Task>
                        )}

                        <ToggleTaskForm
                            boardId={board._id}
                        />
                    </div>
                )}

                <div className="list-group">
                    <AddBoardForm />
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    console.log(state);
    return {
        boards: state.boards,
        tasks: state.tasks
    };
}

export default connect(mapStateToProps, {getBoards, removeBoard, getTasks })(Board);