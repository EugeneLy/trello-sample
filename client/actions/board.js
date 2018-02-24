import axios from 'axios';

const { apiPrefix } = require('../../configs/server.json');
import { LOAD_BOARDS_SUCCESS } from './types';

export function getBoards() {
    return (dispatch) => {
            console.log(dispatch);
            console.log('getBOARD');
            axios.get(`${apiPrefix}/boards`)
             .then(({ data }) => {
                //this.props.onLoadBoards(data);
                dispatch({type: LOAD_BOARDS_SUCCESS, payload: data})
             }).catch(err =>
                console.error(err)
            );
    }
}
