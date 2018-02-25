import axios from 'axios';

const { apiPrefix } = require('../../configs/server.json');
import { LOAD_TASKS_SUCCESS,
         START_WATCH_INFO,
         END_WATCH_INFO,
         CHANGE_TASK_LIST,
         SWAP_TASK} from './types';

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

export function changeTaskList(id, newList) {
    return function(dispatch) {
        dispatch({type: CHANGE_TASK_LIST, payload: {dragId: id, newList: newList}})
    }
}

export function swapTask(dragId, dropId) {
    return function(dispatch) {
        dispatch({type: SWAP_TASK, payload: {dragId: dragId, dropId: dropId}})
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


