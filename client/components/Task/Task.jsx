import React, { Component } from 'react';

import './Task.scss';

class Task extends Component {
    render() {
        return (
            <span className="list-group-item list-group-item-action">
                <div className="d-flex w-100 justify-content-between">
                    <h5 className="mb-1">{this.props.title}</h5>
                    <small>{this.props.dueDate}</small>
                </div>
                <p className="mb-1">{this.props.description}</p>
                <small>Donec id elit non mi porta.</small>
            </span>
        )
    }
}

export default Task;