import { combineReducers } from 'redux';

import tasks from './tasks.js';
import boards from './boards.js';

export default combineReducers({
    tasks,
    boards
})