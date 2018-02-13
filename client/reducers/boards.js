export default function boards(state = [], action) {
    if(action.type === 'LOAD_BOARDS_SUCCESS') {
        return action.payload;
    }

    return state;
}