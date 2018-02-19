import React, { Component } from 'react';

import Authorization from '../Authorization/Authorization.jsx';
import './Header.scss';

class Header extends Component {
    render() {
        return (
            <nav className='bg-inverse header'>
                <div className="logo">
                    <i className="fab fa-react"></i>
                </div>

                <span className="caption">TrelloSample</span>

                <Authorization />
            </nav>
        )

    }
}

export default Header;