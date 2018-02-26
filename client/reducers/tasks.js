import { LOAD_TASKS_SUCCESS} from '../actions/types';

const initialSatate = {collection: []}

export default function tasks(state = initialSatate, action) {
    //console.log(state);
    //console.log(action);

    switch(action.type) {
        case LOAD_TASKS_SUCCESS:
            return {collection: action.payload.tasks};

        /*case CHANGE_TASK_LIST:


            /!*let newState = state.collection.map((task) => {
                if(task._id ===  action.payload.dragId) {
                    console.log(task);
                    task.boardId = action.payload.newList;
                    return task;
                }

                return task;
            })
            console.log(action.payload );
            console.log(newState );
            {collection: newState}
            *!/


            return  state;

        case SWAP_TASK:
            console.log(action.payload);
            return state;*/
    }


    return state;
}