import axios from 'axios';

const { apiPrefix } = require('../../configs/server.json');

export default {
    getTasks() {
        return axios.get(`${apiPrefix}/tasks`);
    },

    createTasks(data) {
        return axios.post(`${apiPrefix}/tasks`, data);
    },

    removeTasks(taskId) {
        return axios.delete(`${apiPrefix}/tasks/${taskId}`);
    }
}