import {CHANGE_TASK_LIST,
        LOAD_BOARDS_SUCCESS,
        SWAP_TASK} from '../actions/types';

const initialSatate = {collection: []};

export default function boards(state = initialSatate, action) {
    switch(action.type) {
        case LOAD_BOARDS_SUCCESS:
            return {collection: action.payload.boards};

        case CHANGE_TASK_LIST:
            console.log('change list in board');

            let newColection = state.collection.map((board) => {
                if(board._id ===  action.payload.newList) {
                    board.tasks.push(action.payload.dragId);
                }

                if(board._id === action.payload.parentList) {
                    let taskIndex = board.tasks.indexOf(action.payload.dragId);
                    board.tasks.splice(taskIndex, 1);
                }

                return board;
            });

            return {collection: newColection};

        case SWAP_TASK:
            console.log('swap in board');
            console.log(action.payload);
            console.log(state);

            let newCollection;
            const { dragId, dropId, parentList, newList } = action.payload;
            const { collection } = state;

            if( parentList === newList) {
                 newCollection = collection.map(board => {
                    if(board._id === parentList) {
                        let taskDrop = board.tasks.indexOf(dropId);
                        let taskDrag = board.tasks.indexOf(dragId);

                        board.tasks.splice(taskDrag, 1);
                        board.tasks.splice(taskDrop, 0, dragId);

                        return board;
                    }
                    return board;
                })
            } else {
                newCollection = collection.map(board => {
                    if(board._id === newList) {
                        let taskDrop = board.tasks.indexOf(dropId);
                        let taskDrag = board.tasks.indexOf(dragId);

                        board.tasks.splice(taskDrag, 1);
                        board.tasks.splice(taskDrop, 0, dragId);

                        return board;
                    }
                    return board;
                })
            }
            return {collection: newCollection};
    }
    return state;
}