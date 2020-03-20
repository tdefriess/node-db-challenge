const express = require('express');

const projects = require('./projectModel');

const router = express.Router();

router.get('/', (req, res) => {
    projects.find()
        .then(projects => {
            res.status(200).json(projects)
        })
        .catch(err => {
            res.status(500).json({error: 'Could not retrieve projects'})
        })
})

router.post('/', (req, res) => {
    projects.add(req.body)
        .then(project => {
            res.status(201).json(project)
        })
        .catch(err => {
            res.status(500).json({error: 'Could not add project'})
        })
})

module.exports = router;