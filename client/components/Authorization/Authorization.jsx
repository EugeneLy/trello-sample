import React, { Component } from 'react';
import { connect } from 'react-redux';

import { logoutUser, loginStart, registerStart } from '../../actions/auth.js';
import './Authorization.scss'

class Authorization extends Component {
    constructor(props) {
        super(props);
    }

    handleLogOut () {
        this.props.logoutUser()
    }

    handleLoginStart() {
        this.props.loginStart();
    }

    handleRegisterStart() {
        this.props.registerStart();
    }

    handleCheckAuth() {
        if(!this.props.authenticated) {
            return (
                <ul className="nav justify-content-end">
                    <li className="nav-item">
                        <a className="nav-link" href="#" onClick={this.handleRegisterStart.bind(this)}>
                            <i className="fas fa-user"></i>
                            Registration
                        </a>
                    </li>

                    <li className="nav-item">
                        <a className="nav-link" href="#" onClick={this.handleLoginStart.bind(this)}>
                            <i className="fas fa-sign-out-alt"></i>
                            Sign in
                        </a>
                    </li>
                </ul>
            )
        } else {
            return (
                <ul className="nav justify-content-end">
                    <li className="nav-item">
                        <span className="nav-link">
                            <i className="fas fa-user"></i>
                            Hi! {this.props.user.name}

                            <span
                               className="text-primary"
                               onClick={this.handleLogOut.bind(this)}
                            >Logout</span>
                        </span>
                    </li>
                </ul>
            )

        }
    }

    render() {
        return (
            <div className="authorization">
                {this.handleCheckAuth()}
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        authenticated: state.auth.authenticated,
        user: state.auth.user
    };
}

export default connect(mapStateToProps, { logoutUser, loginStart, registerStart })(Authorization);