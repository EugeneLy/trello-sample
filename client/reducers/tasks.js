let initialState =
    [
    {
        id: 23,
        boardId: 223,
        title: 'Webpack config',
        description: 'create conf for project',
        dueDate: '20.05.2018'
    },
    {
        id: 25,
        boardId: 243,
        title: 'Redux store',
        description: 'create store for project',
        dueDate: '22.04.2018'
    }
];

export default function tasks(state = initialState, action) {
    console.log(action);
    if(action.type === 'ADD_TASK') {
        return [
            ...state,
            action.payload
        ];
    }

    if(action.type === 'LOAD_TASK_SUCCESS') {
        return [
            ...state,
            action.payload
        ];
    }
    return state;
}