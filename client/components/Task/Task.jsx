import React, { Component } from 'react';

import './Task.scss';

class Task extends Component {
    constructor(props) {
        super(props);
        this.task = this.props.curentTask;
        this.handleRemoveTask = this.handleRemoveTask.bind(this);
    }

    handleRemoveTask(taskId) {
        this.props.onTaskDelete(taskId);
    }

    render() {
        return (
            <span className="list-group-item list-group-item-action">
                <div className="d-flex w-100 title">
                    <h5 className="mb-1">{this.props.title}</h5>
                    <button className="close" onClick={this.handleRemoveTask.bind(null, this.task)}>&times;</button>
                </div>
                <div className="mb-1  w-100 ">{this.props.description}</div>
                <small>{this.props.dueDate}</small>
            </span>
        )
    }
}

export default Task;