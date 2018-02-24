import React, { Component } from 'react';
import { connect } from 'react-redux';

import Task from "../Task/Task.jsx";
import AddBoardForm from "../AddBoardForm/AddBoardForm.jsx";
import ToggleFormButton from "../ToggleFormButton/ToggleFormButton.jsx";

import { getTasks } from '../../actions/task.js';
import { getBoards} from '../../actions/board.js';
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
        this.props.getBoards();
        this.props.getTasks();
    }

    render() {
        return (
            <div className="desk">
                {this.props.boards.map((board,index) =>
                    <div className="list-group" key={index}>
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
                )}


                {this.props.authenticated ?
                    <div className="list-group"> <AddBoardForm /></div>
                    :null
                }

            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        boards: state.boards,
        tasks: state.tasks,
        authenticated: state.auth.authenticated
    };
}

export default connect(mapStateToProps, {getBoards, getTasks })(Board);