import React, { Component } from 'react';

import Task from "../Task/Task.jsx";
import AddBoardForm from "../AddBoardForm/AddBoardForm.jsx";
import ToggleTaskForm from "../ToggleTaskForm/ToggleTaskForm.jsx";
import TasksActions from '../../actions/TasksActions';

import './board.scss';

class Board extends Component {
    handleRemoveTask(taskId) {
        TasksActions.deleteTask(taskId);
    }

    render() {
        return (
            <div>
                {this.props.boards.map((board,index) =>
                    <div className="list-group" key={index}>
                        <h2>{board.title}</h2>

                        {this.props.tasks.map((task,index) =>
                            /*task.boardId === board.id ?*/
                            <Task key={index}
                                  title={task.title}
                                  onRemoveTask={this.handleRemoveTask.bind(null, task)}
                                  description={task.description}
                                  dueDate={task.dueDate}
                            >
                            </Task>
                        )}

                        <ToggleTaskForm />
                    </div>
                )}

                <div className="list-group">
                    <AddBoardForm />
                </div>
            </div>
        )

    }
}

export default Board;