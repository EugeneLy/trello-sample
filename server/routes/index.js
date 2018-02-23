const taskRoutes = require('./task');
const boardRoutes = require('./board');
const userRoutes = require('./user');

module.exports = (app) => {
    app.use(taskRoutes);
    app.use(boardRoutes);
    app.use(userRoutes);
};