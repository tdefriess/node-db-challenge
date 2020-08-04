const db = require('../data/dbConfig');

module.exports = {
    find,
    add
}

function find() {
    return db('resources')
}

function findById(id) {
    return db('resources')
        .select('*')
        .where({ id })
        .first()
}

function add(resource) {
    return db('resources')
        .insert(resource)
        .then(ids => {
            return findById(ids[0])
        })
}