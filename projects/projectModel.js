const db = require('../data/dbConfig');

module.exports = {
    find,
    add
}

function find() {
    return db('projects')
}

function findById(id) {
    return db('projects')
        .select('*')
        .where({ id })
        .first()
}

function add(project) {
    return db('projects')
        .insert(project)
        .then(ids => {
            return findById(ids[0])
        })
}