export default function tasks(state = [], action) {
    console.log(action);
    if(action.type === 'LOAD_TASKS_SUCCESS') {
        return action.payload

    }
    return state;
}