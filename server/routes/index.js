const taskRoutes = require('./task');
const boardRoutes = require('./board');

module.exports = (app) => {
    app.use(taskRoutes);
    app.use(boardRoutes);
};