import React, { Component } from 'react';
import { connect } from 'react-redux';
import { DragSource, DropTarget } from 'react-dnd'

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
        const { connectDragSource, connectDropTarget, isOver, isDragging } = this.props;
        if(this.state.isEditable){
            return (
                <EditTaskForm
                    editableTask={this.props.task}
                    toggleMode={this.toggleMode.bind(this)}
                />
            )
        } else {
             return connectDropTarget(connectDragSource(
                 <div className="list-group-item task-item list-group-item-action"
                      style={{
                          opacity: isDragging ? 0.5 : 1,
                          backgroundColor: isOver ? '#E6E6FA' : 'white'
                      }} >

                     {this.navAuthUserOnly()}
                     <div className="info-bloc"
                          onClick={this.showInfo.bind(this)}>

                         <div className="d-flex w-100 title">
                            <h5 className="mb-1">{this.props.task.title}</h5>
                        </div>
                         <small>{this.props.task.dueDate}</small>
                     </div>
                 </div>
            ))
        }
    }
}

const cardSource = {
    beginDrag(props) {
        return {
            id: props.task.id,
            parentList: props.boardId,
        }
    }
}

function dragCollect(connect, monitor) {
    return {
        connectDragSource: connect.dragSource(),
        isDragging: monitor.isDragging()
    }
}

const cardTarget = {
    drop(props, monitor) {
        console.log('Card Drop Fired');
        return {
            dropId: props.task.id
        }
    },
    canDrop(props, monitor) {
        return props.task.id !== monitor.getItem().id
    }
}

function dropCollect(connect, monitor) {
    return {
        connectDropTarget: connect.dropTarget(),
        isOver: monitor.isOver()
    }
}

function mapStateToProps(state) {
    return {
        authenticated: state.auth.authenticated
    };
}

export default DropTarget('TASK', cardTarget, dropCollect)
    (DragSource('TASK', cardSource, dragCollect)
    (connect(mapStateToProps, { getTasks, loginStart, startWatchInfo })(Task)));