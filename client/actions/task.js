import axios from 'axios';

const { apiPrefix } = require('../../configs/server.json');
import { LOAD_TASKS_SUCCESS,
         START_WATCH_INFO,
         END_WATCH_INFO } from './types';

export function getTasks() {
    return function(dispatch) {
            axios.get(`${apiPrefix}/tasks`)
            .then(({ data }) => {
                dispatch({type: LOAD_TASKS_SUCCESS, payload: {tasks: data}})
            }).catch(err =>
                console.error(err)
            );
    }
}

export function startWatchInfo(info) {
    return function(dispatch) {
           dispatch({type: START_WATCH_INFO, payload: info})
    }
}

export function endWatchInfo() {
    return function(dispatch) {
        dispatch({type: END_WATCH_INFO, payload: ''})
    }
}


