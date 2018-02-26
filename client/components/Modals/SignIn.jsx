import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { loginUser, loginEnd } from '../../actions/auth.js';

const form = reduxForm({
   form: 'signin'
});

import './Modals.scss';

class SignIn extends Component {

    handleSubmitSignIn (formProps) {
        this.props.loginUser(formProps)
    }

    handleEndSignIn () {
        this.props.loginEnd()
    }

    renderMessage() {
        if (this.props.errorMessage) {
            return (
                <div className="text-danger">
                    <span><strong>Error!</strong> {this.props.errorMessage}</span>
                </div>
            );
        }
    }

    handleSignIn() {
        if(this.props.authprocess) {
            const { handleSubmit } = this.props;
            return (
                <div className='modal fade' role="dialog">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Sign in</h5>
                                <button type="button"
                                        className="close"
                                        onClick={this.handleEndSignIn.bind(this)}
                                        >
                                    <span>&times;</span>
                                </button>
                            </div>
                            <form onSubmit={handleSubmit(this.handleSubmitSignIn.bind(this))}>
                                <div className="modal-body">
                                    <div className='form-group'>
                                        <Field type='text'
                                               name='email'
                                               component="input"
                                               placeholder='E-mail'
                                               className="form-control"
                                        />
                                    </div>
                                    <div className='form-group'>
                                        <Field type='password'
                                               name='password'
                                               component="input"
                                               placeholder='Password'
                                               className="form-control"
                                        />
                                    </div>
                                    {this.renderMessage()}
                                </div>
                                <div className="modal-footer">
                                    <button type="submit" className="btn btn-primary">Sign in</button>
                                    <button type="button"
                                            className="btn btn-secondary"
                                            onClick={this.handleEndSignIn.bind(this)}>Cancel
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            )
        } else {
            return null;
        }
    }

    render() {
        return (
            this.handleSignIn()
        )
    }
}


function mapStateToProps(state) {
    return {
        errorMessage: state.auth.error,
        message: state.auth.message,
        authprocess: state.auth.authprocess
    };
}

export default connect(mapStateToProps, { loginUser, loginEnd })(form(SignIn));