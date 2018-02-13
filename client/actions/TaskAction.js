export const LOAD_TASKS_SUCCESS = 'LOAD_TASKS_SUCCESS';

export function loadTodo(text) {
    return {
        type: LOAD_TASKS_SUCCESS,
        text
    }
}