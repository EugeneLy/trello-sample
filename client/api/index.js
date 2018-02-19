import axios from 'axios';

const { apiPrefix } = require('../../configs/server.json');

export default {
    /*Task API methods*/
    getTasks() {
        return axios.get(`${apiPrefix}/tasks`);
    },

    editTask(data) {
        return axios.put(`${apiPrefix}/task/edit`, data);
    },

    createTask(data) {
        console.log(data);
        return axios.post(`${apiPrefix}/tasks`, data);
    },

    removeTask(taskId) {
        return axios.delete(`${apiPrefix}/tasks/${taskId}`);
    },

    /*Board API methods*/
    getBoards() {
        return axios.get(`${apiPrefix}/boards`);
    },

    createBoard(data) {
        return axios.post(`${apiPrefix}/board`, data);
    },

    removeBoard(boardId) {
        return axios.delete(`${apiPrefix}/board/${boardId}`);
    }
}