import {START_WATCH_INFO,
        END_WATCH_INFO} from '../actions/types';

export default function task(state = {}, action) {
    switch(action.type) {
        case START_WATCH_INFO:
            return { info: action.payload, watchinfo: true};
        case END_WATCH_INFO:
            return { info: action.payload, watchinfo: false};
    }

    return state;
}