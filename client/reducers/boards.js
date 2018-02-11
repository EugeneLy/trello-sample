let initialState = [
    {
        id: 223,
        title: 'Need to do'
    },
    {
        id: 243,
        title: 'In progres'
    }
]

export default function boards(state = initialState, action) {
    if(action.type === 'ADD_BOARD') {
        return [
            ...state,
            action.payload
        ];
    }

    return state;
}