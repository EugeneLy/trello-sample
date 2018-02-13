import api from '../api';

const TaskActions = {
    loadTasks() {
        api.getTasks()
        .then(({ data }) => {
            //this.props.onLoadTaskRequest(data);
        });
    },

    createTask(task) {
        api.createTasks(task)
            .then(() =>
                this.loadTasks()
            )
            .catch(err =>
                console.error(err)
            );
    },

    deleteTask(taskId) {
        console.log(taskId);
        api.removeTasks(taskId)
        .then(() =>
            this.loadTasks()
        )
        .catch(err =>
            console.error(err)
        );
    }
};

export default TaskActions;
