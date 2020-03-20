const express = require('express');

const server = express();

// const projectRouter = require('../projects/project-router');
// const resourceRouter = require('../resources/resource-router');
// const taskRouter = require('../tasks/task-router');

const helmet = require('helmet');

server.use(express.json());

// server.use('/api/projects', projectRouter);
// server.use('/api/resources', resourceRouter);
// server.use('/api/tasks', taskRouter);

server.get('/', (req, res) => {
    res.send('API up');
});

module.exports = server;