import React, { Component } from "react";
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { registerUser, registerEnd } from '../../actions/auth.js';

import './Modals.scss'

const form = reduxForm({
    form: 'registrer'
});

class Registration extends Component {
    handleRegisterEnd() {
        this.props.registerEnd();
    }

    handleSubmitRegister (formProps) {
        this.props.registerUser(formProps);
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

    handleRegister() {
        if (this.props.regstprocess) {
            const { handleSubmit } = this.props;
            return (
                <div className='modal fade' role="dialog">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Registration</h5>
                                <button type="button"
                                        className="close"
                                        onClick={this.handleRegisterEnd.bind(this)}
                                >
                                    <span>&times;</span>
                                </button>
                            </div>
                            <form onSubmit={handleSubmit(this.handleSubmitRegister.bind(this))}>
                                <div className="modal-body">
                                    <div className='form-group'>
                                        <Field type='text'
                                               name='name'
                                               component="input"
                                               placeholder='Name'
                                               className="form-control"
                                        />
                                    </div>
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
                                    <button type="submit" className="btn btn-primary">Sign Up</button>
                                    <button type="button"
                                            className="btn btn-secondary"
                                            onClick={this.handleRegisterEnd.bind(this)}
                                            >Cancel
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
            this.handleRegister()
        )
    }
}

function mapStateToProps(state) {
    return {
        errorMessage: state.auth.error,
        message: state.auth.message,
        regstprocess: state.auth.regstprocess
    };
}

export default connect(mapStateToProps, { registerUser, registerEnd })(form(Registration));