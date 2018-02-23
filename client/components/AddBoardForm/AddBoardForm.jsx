import React, { Component } from 'react';

import { connect } from 'react-redux';

import { createBoard, getBoards} from '../../actions/board.js';

class AddBoardForm extends Component {
    constructor(props) {
        super(props);

        this.state = {title: ''};
    }

    handleTitleChange(event) {
        this.setState({ title: event.target.value });
    }

    handleBoardAdd() {
        const newBoard = {
            title: this.state.title
        };

        console.log(newBoard);
        this.props.createBoard(newBoard);

                this.props.getBoards();

        this.setState({ title: ''});
    }

    render() {
        return (
            <div>
                <div className='form-group '>
                    <button className="btn btn-info w-100"
                            disabled={!this.state.title}
                            onClick={this.handleBoardAdd.bind(this)}
                    >Add board</button>
                </div>

                <div className='form-group'>
                <input type="text"
                       placeholder="Board title"
                       className="form-control"
                       value={this.state.title}
                       onChange={this.handleTitleChange.bind(this)}
                />
                </div>
            </div>
        )

    }
}

function mapStateToProps(state) {
    return state;
}

export default connect(mapStateToProps, { createBoard, getBoards })(AddBoardForm);
