import React, { Component } from 'react';
import { connect } from 'react-redux';


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
        }

        console.log(newBoard);
        this.props.onAddBoard(newBoard);
        this.setState({ title: ''});
    }

    render() {
        return (
            <div>
                <div className='form-group '>
                    <button className="btn btn-info w-100"
                            onClick={this.handleBoardAdd.bind(this)}
                    >Add board</button>
                </div>

                <div className='form-group'>
                <input type="text"
                       placeholder="Board title"
                       className="form-control"
                       onChange={this.handleTitleChange.bind(this)}
                />
                </div>
            </div>
        )

    }
}

export default connect(
    null,
    dispatch => ({
        onAddBoard: (boardObj) => {
            dispatch({type: 'ADD_BOARD', payload: boardObj})
        }
    })
)(AddBoardForm);
