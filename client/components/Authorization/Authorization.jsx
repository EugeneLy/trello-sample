import React, { Component } from 'react';

import './authorization.scss'

class Authorization extends Component {
    render() {
        return (
            <ul className="nav justify-content-end authorization">
                <li className="nav-item">
                    <a className="nav-link active" href="#">
                        <i className="fas fa-sign-out-alt"></i>
                         Sign in
                    </a>
                </li>

                <li className="nav-item">
                    <a className="nav-link active" href="#">
                        <i className="fas fa-user-plus"></i>
                        Registration
                    </a>
                </li>
            </ul>
        )
    }
}

export default Authorization;