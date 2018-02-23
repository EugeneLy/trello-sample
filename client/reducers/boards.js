import { LOAD_BOARDS_SUCCESS } from '../actions/types';

export default function boards(state = [], action) {
    switch(action.type) {
        case LOAD_BOARDS_SUCCESS:
            return action.payload;
    }
    return state;
}