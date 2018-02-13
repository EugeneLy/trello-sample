import React, { Component } from 'react';
import { connect } from 'react-redux';

import Header from './Header/Header.jsx';
import Board from './Board/Board.jsx';

import './App.scss'

class App extends Component {
    render() {
        return (
            <div className="content">
                <Header />
                <Board
                    onTaskAdded={this.handleTaskAdd}
                    tasks={this.props.tasks}
                    boards={this.props.boards}
                />
            </div>
        )
    }
}

export default  connect(
    state => ({
        tasks: state.tasks,
        boards: state.boards
    })
)(App);
