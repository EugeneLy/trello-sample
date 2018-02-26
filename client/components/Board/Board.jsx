import React, { Component } from 'react';
import { connect } from 'react-redux';
import { DropTarget } from 'react-dnd';

import { getBoards } from '../../actions/board.js';
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

                {board.tasks.map(taskId =>
                     this.props.tasks.map(task =>
                        task.id === taskId ?
                            <Task key={task.id} boardId={board._id} task={task}/>
                            : null
                    )
                )}

                {this.props.authenticated ?
                    <ToggleFormButton board={board} />
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
        const parentList = monitor.getItem().parentList;

        if (props.board.tasks.indexOf(id) === -1) {
            props.drop(id, boardId, parentList);
        }

        if (monitor.getDropResult()) {
            props.swap(id, monitor.getDropResult().dropId, boardId, parentList)
        }
    },
    canDrop(props) {
        return !!props.authenticated;
    }
};

function collect(connect) {
    return {
        connectDropTarget: connect.dropTarget()
    }
}

function mapStateToProps(state) {
    return {
        boards: state.boards.collection,
        authenticated: state.auth.authenticated
    };
}

export default DropTarget('TASK', listTarget, collect)
               (connect(mapStateToProps, { getBoards })(Board));