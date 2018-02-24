import React, { Component } from 'react';
import { connect } from 'react-redux';

import EditTaskForm from '../EditTaskForm/EditTaskForm.jsx';
import { loginStart } from '../../actions/auth.js';
import { getTasks, startWatchInfo } from '../../actions/task.js';
import api from '../../api/task.js'

import './Task.scss';

class Task extends Component {
    constructor(props) {
        super(props);
        this.state={isEditable: false};
    }

    handleRemoveTask(task) {
        api.removeTask(task)
            .then(() =>
                this.props.getTasks()
            );
    }

    showInfo() {
        this.props.authenticated ?
            this.props.startWatchInfo(this.props.task):
            this.props.loginStart()
    }

    toggleMode() {
        this.setState({isEditable: !this.state.isEditable})
    }

    navAuthUserOnly () {
        if(this.props.authenticated) {
            return (
                <div>
                    <div className="edit" onClick={this.toggleMode.bind(this)}>
                        <i className="fas fa-edit"></i>
                    </div>
                    <div className="delete"
                         onClick={this.handleRemoveTask.bind(this,this.props.task._id)}>
                        <i className="far fa-trash-alt"></i>
                    </div>
                </div>
            )
        }
    }

    render() {
        if(this.state.isEditable){
            return (
                <EditTaskForm
                    editableTask={this.props.task}
                    toggleMode={this.toggleMode.bind(this)}
                />
            )
        } else {
             return(
                 <div className="list-group-item task-item list-group-item-action">
                     {this.navAuthUserOnly()}
                     <div className="info-bloc"
                          onClick={this.showInfo.bind(this)}>

                         <div className="d-flex w-100 title">
                            <h5 className="mb-1">{this.props.task.title}</h5>
                        </div>
                         <small>{this.props.task.dueDate}</small>
                     </div>
                 </div>
            )
        }
    }
}

function mapStateToProps(state) {
    return {
        authenticated: state.auth.authenticated
    };
}

export default connect(mapStateToProps, { getTasks, loginStart, startWatchInfo })(Task);