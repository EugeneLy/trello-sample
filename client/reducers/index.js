import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import tasks from './tasks.js';
import task from './task.js';
import boards from './boards.js';
import auth from './auth.js';

export default combineReducers({
    tasks,
    task,
    boards,
    auth,
    form: formReducer
})