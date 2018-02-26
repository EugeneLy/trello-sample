import React, { Component } from 'react';
import { connect } from 'react-redux';
import uuid from 'uuid-v4';

import { getBoards } from '../../actions/board.js';
import { getTasks } from '../../actions/task.js';
import apiTask from '../../api/task.js'
import apiBoard from '../../api/board.js'


class AddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            title: '',
            description: '',
            dueDate: ''
        }
    }

    handleDescriptionChange(event) {
        this.setState({ description: event.target.value });
    }

    handleTitleChange(event) {
        this.setState({ title: event.target.value });
    }

    handleDueDateChange(event) {
        this.setState({ dueDate: event.target.value });
    }

    handleTaskAdd() {
        const newTask = {
            id: uuid(),
            title: this.state.title,
            description: this.state.description,
            dueDate: this.state.dueDate
        };

        this.props.board.tasks.push(newTask.id)

        apiBoard.editBoard(this.props.board)
            .then(() =>
                this.props.getBoards()
            );

        apiTask.createTask(newTask)
            .then(() =>
                this.props.getTasks()
            );

        this.setState({ title: '', description: '', dueDate: ''});
    }

    render() {
        console.log(this.props.board._id);
        return (
            <div className='addTaskForm'>

                <div className='form-group'>
                    <input type='text'
                           placeholder='Title'
                           className="form-control"
                           value={this.state.title}
                           onChange={this.handleTitleChange.bind(this)}
                    />
                </div>

                <div className='form-group'>
                    <input type='text'
                           placeholder='Description'
                           className="form-control"
                           value={this.state.description}
                           onChange={this.handleDescriptionChange.bind(this)}
                    />
                </div>

                <div className='form-group'>
                    <input type='text'
                           placeholder='Due date'
                           className="form-control"
                           value={this.state.dueDate}
                           onChange={this.handleDueDateChange.bind(this)}
                    />
                </div>

                <div className='form-group'>
                    <input
                        type='button'
                        value='Add task'
                        disabled={!this.state.title||!this.state.description}
                        className="btn btn-info w-100"
                        onClick={this.handleTaskAdd.bind(this)}
                    />
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return state;
}

export default connect(mapStateToProps, { getTasks, getBoards })(AddForm);