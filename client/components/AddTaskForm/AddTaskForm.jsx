import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getTasks } from '../../actions/task.js';
import api from '../../api/task.js'


class AddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            boardId: '',
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
            title: this.state.title,
            boardId: this.props.boardId,
            description: this.state.description,
            dueDate: this.state.dueDate
        };

        api.createTask(newTask)
            .then(() =>
                this.props.getTasks()
            );

        this.setState({ title: '', description: '', dueDate: ''});
    }

    render() {
        console.log(this.props.boardId);
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

export default connect(mapStateToProps, { getTasks })(AddForm);