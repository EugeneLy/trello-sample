import React, {Component} from "react";
import { getTasks } from '../../actions/task.js';
import api from '../../api/task.js'
import {connect} from "react-redux";

class EditTaskForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: this.props.task.title,
            boardId: this.props.task.boardId,
            description: this.props.task.description,
            dueDate: this.props.task.dueDate
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

    handleToggle() {
        this.props.toggleMode();
    }

    handleTaskEdit() {
        const newTask = {
            _id: this.props.task._id,
            title: this.state.title,
            boardId: this.props.task.boardId,
            description:this.state.description,
            dueDate: this.state.dueDate
        };

        console.log(newTask);
        api.editTask(newTask)
            .then(() =>
                this.props.getTasks()
            );
        this.handleToggle();
    }

    render() {
        return (
            <div className="list-group-item list-group-item-action">
                <div className='form-group w-100'>
                    <input type='text'
                           placeholder='Title'
                           className="form-control"
                           value={this.state.title}
                           onChange={this.handleTitleChange.bind(this)}
                    />
                </div>
                <div className='form-group w-100'>
                    <input type='text'
                           placeholder='Description'
                           className="form-control"
                           value={this.state.description}
                           onChange={this.handleDescriptionChange.bind(this)}
                    />
                </div>
                <div className='form-group w-100'>
                    <input type='text'
                           placeholder='Due date'
                           className="form-control"
                           value={this.state.dueDate}
                           onChange={this.handleDueDateChange.bind(this)}
                    />
                </div>
                <div className='form-group w-100'>
                    <input
                        type='button'
                        value='Save task'
                        disabled={!this.state.title||!this.state.description}
                        className="btn btn-success w-100"
                        onClick={this.handleTaskEdit.bind(this)}
                    />
                </div>
                <div className='form-group w-100'>
                    <input
                        type='button'
                        value='Cancel'
                        className="btn btn-warning w-100"
                        onClick={this.handleToggle.bind(this)}
                    />
                </div>

            </div>
        )
    }
}

function mapStateToProps(state) {
    return state;
}

export default connect(mapStateToProps, { getTasks })(EditTaskForm);