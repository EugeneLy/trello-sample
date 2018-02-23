import React, { Component } from 'react';

import AddTaskForm from '../AddTaskForm/AddTaskForm.jsx';


class ToggleTaskForm extends Component {
    constructor(props) {
        super(props);
        this.state={isOpened: false};
    }

    toggleForm() {
        this.setState({isOpened: !this.state.isOpened})
    }

    render() {
        let taskForm;
        let btnText;

        if(this.state.isOpened){
            taskForm = <AddTaskForm boardId={this.props.boardId}/>;
            btnText = 'Close form';
        }

        if(!this.state.isOpened){
            btnText = 'Add task';
        }

        return (
            <div>
                {taskForm}
                <button className="btn btn-link w-100" onClick={this.toggleForm.bind(this)}>{btnText}</button>
            </div>
        )
    }
}

export default ToggleTaskForm;
