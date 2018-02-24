import React, { Component } from 'react';

import Header from './Header/Header.jsx';
import Board from './Board/Board.jsx';

import SignIn from './Modals/SignIn.jsx';
import Registration from './Modals/Registration.jsx';
import Info from './Modals/Info.jsx';

import './App.scss'

class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="content">
                <Header />
                <Board/>

                <SignIn />
                <Registration />
                <Info />
            </div>
        )
    }
}

export default App;
