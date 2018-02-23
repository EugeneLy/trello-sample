import React, { Component } from 'react';
import { connect } from 'react-redux';

import EditTaskForm from '../EditTaskForm/EditTaskForm.jsx';
import { removeTask } from '../../actions/task.js';

import './Task.scss';

class Task extends Component {
    constructor(props) {
        super(props);
        this.state={isEditable: false};
    }

    handleRemoveTask(task) {
        this.props.removeTask(task);
    }

    toggleMode() {
        this.setState({isEditable: !this.state.isEditable})
    }

    render() {
        if(this.state.isEditable){
            return (
                <EditTaskForm
                    task={this.props.task}
                    toggleMode={this.toggleMode.bind(this)}
                    onTaskEdit={this.props.onTaskEdit}
                />
            )
        } else {
             return(
                 <div className="list-group-item list-group-item-action">
                    <div className="d-flex w-100 title">
                        <h5 className="mb-1">{this.props.task.title}</h5>
                        <div className="edit" onClick={this.toggleMode.bind(this)}>
                            <i className="fas fa-edit"></i>
                        </div>
                        <div className="delete" onClick={this.handleRemoveTask.bind(this)}>
                            <i className="far fa-trash-alt"></i>
                        </div>
                    </div>

                    <div className="mb-1  w-100 ">{this.props.task.description}</div>
                    <small>{this.props.task.dueDate}</small>
                 </div>
            )
        }
    }
}

function mapStateToProps(state) {
    return state;
}

export default connect(mapStateToProps, { removeTask })(Task);