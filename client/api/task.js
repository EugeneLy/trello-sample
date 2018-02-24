import axios from "axios";

const { apiPrefix } = require('../../configs/server.json');

export default {
    editTask(data) {
        return axios.put(`${apiPrefix}/task/edit`, data);
    },

    createTask(data) {
        return axios.post(`${apiPrefix}/tasks`, data);
    },

    removeTask(taskId) {
        return axios.delete(`${apiPrefix}/tasks/${taskId}`)
    }

}
