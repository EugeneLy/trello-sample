import React, { Component } from 'react';
import { connect } from 'react-redux';
import { DropTarget } from 'react-dnd';

import Task from "../Task/Task.jsx";
import ToggleFormButton from "../ToggleFormButton/ToggleFormButton.jsx";

import api from '../../api/board.js'

import './Board.scss';

class Board extends Component {
    constructor(props) {
        super(props);
    }

    handleRemoveBoard(boardId) {
        api.removeBoard(boardId)
            .then(() =>
                this.props.getBoards()
            );
    }

    componentWillMount() {

    }

    render() {
        const { connectDropTarget, board } = this.props;
        return connectDropTarget(
            <div className="list-group">
                <h2 className="title">{board.title}
                    {this.props.authenticated ?
                        <div className="delete"
                             onClick={this.handleRemoveBoard.bind(this, board._id)}>
                            <i className="far fa-trash-alt"></i>
                        </div>
                        : null
                    }
                </h2>

                {this.props.tasks.map((task,index) =>
                    task.boardId !== board._id ? null :
                        <Task key={index}
                              task={task}>
                        </Task>
                )}

                {this.props.authenticated ?
                    <ToggleFormButton boardId={board._id} />
                    :null
                }
            </div>
        )
    }
}

const listTarget = {
    drop(props, monitor) {
        console.log('Column Drop Fired');
        const id = monitor.getItem().id;
        const boardId = props.board._id;

        let dragTask = props.tasks.filter((task) => {
            return task._id === id;
        })

        //console.log(dragTask[0].boardId !== boardId);


        /*if (!props.tasks.some(task => task._id === id)) {
            props.drop(id, boardId);
        }*/

        if (dragTask[0].boardId !== boardId) {
            props.drop(id, boardId);
        }

        if (monitor.getDropResult()) {
            props.swap(id, monitor.getDropResult().dropId)
        }
    }
}

function collect(connect) {
    return {
        connectDropTarget: connect.dropTarget()
    }
}

function mapStateToProps(state) {
    return {
        authenticated: state.auth.authenticated
    };
}

export default DropTarget('TASK', listTarget, collect)
               (connect(mapStateToProps)(Board));