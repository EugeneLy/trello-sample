import { LOAD_TASKS_SUCCESS,
         CHANGE_TASK_LIST,
         SWAP_TASK} from '../actions/types';

export default function tasks(state = {}, action) {
    //console.log(state);
    //console.log(action);

    switch(action.type) {
        case LOAD_TASKS_SUCCESS:
            return {collection: action.payload.tasks};

        case CHANGE_TASK_LIST:


            let newState = state.collection.map((task) => {
                if(task._id ===  action.payload.dragId) {
                    console.log(task);
                    task.boardId = action.payload.newList;
                    return task;
                }

                return task;
            })
            console.log(action.payload );
            console.log(newState );

            return {collection: newState} ;

        case SWAP_TASK:
            console.log(action.payload);
            return state;
    }


    return state;
}