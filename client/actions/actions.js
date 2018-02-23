import axios from 'axios';
import  cookie from 'react-cookies';
const { apiPrefix } = require('../../configs/server.json');
import { AUTH_USER,
         AUTH_ERROR,
         UNAUTH_USER,
         STARTAUTH_USER,
         ENDAUTH_USER,
         STARTREGST_USER,
         ENDREGST_USER} from './types';

export function errorHandler(dispatch, error, type) {
    let errorMessage = '';

    logoutUser();
    if(error.data.error) {
        errorMessage = error.data.error;
    } else if(error.data){
        errorMessage = error.data;
    } else {
        errorMessage = error;
    }

    if(error.status === 401) {
        console.log(errorMessage);
        dispatch({
            type: type,
            payload: error.data.error
        });
        logoutUser();
    } else {
        dispatch({
            type: type,
            payload: error.data.error
        });
    }
}

export function registerUser({ name, email, password }) {
    console.log({ name, email, password });
    return function (dispatch) {
        axios.post(`${apiPrefix}/register`, { name, email, password })
            .then((response) => {
                cookie.save('token', response.data.token, { path: '/' });
                cookie.save('user', response.data.user, { path: '/' });
                dispatch({ type: AUTH_USER });
            })
            .catch((error) => {
                errorHandler(dispatch, error.response, AUTH_ERROR);
            });
    };
}

export function loginUser({ email, password }) {
    return function(dispatch) {

        axios.post(`${apiPrefix}/signin`, { email, password })
            .then((response) => {
                logoutUser();
                console.log(response.data.token);
                cookie.save('token', response.data.token, { path: '/' });
                cookie.save('user', response.data.user, { path: '/' });
                dispatch({ type: AUTH_USER });
                //window.location.href = CLIENT_ROOT_URL + '/dashboard';
            })
            .catch((error) => {
                console.log(error);
                errorHandler(dispatch, error.response, AUTH_ERROR)
            });
    }
}

export function logoutUser() {
    return function (dispatch) {
        dispatch({ type: UNAUTH_USER });
        cookie.remove('token', { path: '/' });
    }
}

export function loginStart() {
    return function (dispatch) {
        dispatch({ type: STARTAUTH_USER });
    }
}

export function loginEnd() {
    return function (dispatch) {
        dispatch({ type: ENDAUTH_USER });
    }
}

export function registerStart() {
    return function (dispatch) {
        dispatch({ type: STARTREGST_USER });
    }
}

export function registerEnd() {
    return function (dispatch) {
        dispatch({ type: ENDREGST_USER });
    }
}
