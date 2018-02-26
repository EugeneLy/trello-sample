import { LOAD_TASKS_SUCCESS} from '../actions/types';

const initialSatate = {collection: []}

export default function tasks(state = initialSatate, action) {
    //console.log(state);
    //console.log(action);

    switch(action.type) {
        case LOAD_TASKS_SUCCESS:
            return {collection: action.payload.tasks};
    }


    return state;
}