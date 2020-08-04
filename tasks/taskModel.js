const db = require('../data/dbConfig');

module.exports = {
    find,
    add
}

function find() {
    return db('tasks')
        .leftJoin('projects', 'tasks.project_id', 'projects.id')
}

function findById(id) {
    return db('tasks')
        .select('*')
        .where({ id })
        .first()
}

function add(project) {
    return db('tasks')
        .insert(project)
        .then(ids => {
            return findById(ids[0])
        })
}