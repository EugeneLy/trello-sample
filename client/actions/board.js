import axios from 'axios';

const { apiPrefix } = require('../../configs/server.json');
import {CHANGE_TASK_LIST, LOAD_BOARDS_SUCCESS, SWAP_TASK} from './types';

export function getBoards() {
    return (dispatch) => {
            axios.get(`${apiPrefix}/boards`)
             .then(({ data }) => {
                dispatch({type: LOAD_BOARDS_SUCCESS, payload: {boards: data}})
             }).catch(err =>
                console.error(err)
            );
    }
}

export function changeTaskList(id, newList, parentList) {
    return function(dispatch) {
        dispatch({
            type: CHANGE_TASK_LIST,
            payload: {dragId: id, newList: newList, parentList: parentList
            }
        })
    }
}

export function swapTask(dragId, dropId, newList, parentList) {
    return function(dispatch) {
        dispatch({
            type: SWAP_TASK,
            payload: {
                dragId: dragId,
                dropId: dropId,
                newList: newList,
                parentList: parentList
            }
        })
    }
}
