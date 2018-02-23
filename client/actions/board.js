import axios from 'axios';

const { apiPrefix } = require('../../configs/server.json');
import { LOAD_BOARDS_SUCCESS } from './types';


export function getBoards() {
    return function(dispatch) {
            axios.get(`${apiPrefix}/boards`)
             .then(({ data }) => {
                //this.props.onLoadBoards(data);
                 console.log('getBOARD');
                dispatch({type: LOAD_BOARDS_SUCCESS, payload: data})
             }).catch(err =>
                console.error(err)
            );
    }
}

export function createBoard(data) {
    return function() {
        axios.post(`${apiPrefix}/board`, data);
           /* .then(() =>
                getBoards()
            )
            .catch(err =>
                console.error(err)
            );*/
    }
}

export function removeBoard(boardId) {
    return axios.delete(`${apiPrefix}/board/${boardId}`)
           .then(() =>
               getBoards()
           )
           .catch(err =>
               console.error(err)
           );
}

/*
fetchBoards() {
    api.getBoards()
        .then(({ data }) => {
            this.props.onLoadBoards(data);
        });
}

handleBoardAdd(board) {
    api.createBoard(board)
        .then(() =>
            this.fetchBoards()
        )
        .catch(err =>
            console.error(err)
        );
}

handleBoardDelete(board) {
    console.log(board._id);
    api.removeBoard(board._id)
        .then(() =>
            this.fetchBoards()
        )
        .catch(err =>
            console.error(err)
        );
}*/
