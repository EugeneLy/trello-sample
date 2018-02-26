import axios from 'axios';

const { apiPrefix } = require('../../configs/server.json');

export default {
    createBoard(data) {
        return axios.post(`${apiPrefix}/board`, data);
    },

    editBoard(data) {
        return axios.put(`${apiPrefix}/board/`, data);
    },

    removeBoard(boardId) {
        return axios.delete(`${apiPrefix}/board/${boardId}`);
    }
}