import React, { Component } from 'react';

import Task from "../Task/Task.jsx";
import AddBoardForm from "../AddBoardForm/AddBoardForm.jsx";
import ToggleTaskForm from "../ToggleFormButton/ToggleFormButton.jsx";

import './board.scss';

class Board extends Component {
    constructor(props) {
        super(props);
        this.handleRemoveBoard = this.handleRemoveBoard.bind(this);
    }

    handleRemoveBoard(boardId) {
        this.props.onBoardDelete(boardId);
    }

    render() {
        return (
            <div>
                {this.props.boards.map((board,index) =>
                    <div className="list-group" key={index}>
                        <h2 className="title">{board.title}
                            <div className="delete" onClick={this.handleRemoveBoard.bind(null, board)}>
                                <i className="far fa-trash-alt"></i>
                            </div>
                        </h2>

                        {this.props.tasks.map((task,index) =>
                            task.boardId !== board._id ? null :
                                <Task key={index}
                                  onTaskDelete={this.props.onTaskDelete}
                                  onTaskEdit={this.props.onTaskEdit}
                                  task={task}
                            >
                            </Task>
                        )}

                        <ToggleTaskForm
                            onTaskAdded = {this.props.onTaskAdded}
                            boardId={board._id}
                        />
                    </div>
                )}

                <div className="list-group">
                    <AddBoardForm
                        onBoardAdded={this.props.onBoardAdded}
                    />
                </div>
            </div>
        )

    }
}

export default Board;