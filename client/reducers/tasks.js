import { LOAD_TASKS_SUCCESS,
         START_WATCH_INFO} from '../actions/types';

export default function tasks(state = [], action) {
    console.log(action);

    switch(action.type) {
        case LOAD_TASKS_SUCCESS:
            return action.payload;
    }


    return state;
}