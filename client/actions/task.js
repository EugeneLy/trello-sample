import axios from 'axios';

const { apiPrefix } = require('../../configs/server.json');

export function getTasks() {
    return function(dispatch) {
            axios.get(`${apiPrefix}/tasks`)
            .then(({ data }) => {
                dispatch({type: 'LOAD_TASKS_SUCCESS', payload: data})
            }).catch(err =>
                console.error(err)
            );
    }
}

export function editTask(data) {
    return axios.put(`${apiPrefix}/task/edit`, data)
           .then(() => {
                getTasks();
           }).catch(err =>
                console.error(err)
           );
}

export function createTask(data) {
    return function() {
        axios.post(`${apiPrefix}/tasks`, data)
            .then(() => {
                getTasks();
            }).catch(err =>
            console.error(err)
        );
    }
}

export function removeTask(taskId) {
    return axios.delete(`${apiPrefix}/tasks/${taskId}`)
           .then(() => {
               getTasks();
           }).catch(err =>
               console.error(err)
           );
}

