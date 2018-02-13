import React, { Component } from 'react';

import Task from "../Task/Task.jsx";
import AddBoardForm from "../AddBoardForm/AddBoardForm.jsx";
import ToggleTaskForm from "../ToggleTaskForm/ToggleTaskForm.jsx";

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
                    <div id={board._id} className="list-group" key={index}>
                        <h2 className="title">{board.title}
                            <button className="close"  onClick={this.handleRemoveBoard.bind(null, board)}>&times;</button>
                        </h2>

                        {this.props.tasks.map((task,index) =>
                            task.boardId !== board._id ? null :
                                <Task key={index}
                                  title={task.title}
                                  onTaskDelete={this.props.onTaskDelete}
                                  curentTask={task}
                                  description={task.description}
                                  dueDate={task.dueDate}
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