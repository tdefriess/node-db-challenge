const express = require('express');

const tasks = require('./taskModel');

const router = express.Router();

router.get('/', (req, res) => {
    tasks.find()
        .then(tasks => {
            res.status(200).json(tasks)
        })
        .catch(err => {
            res.status(500).json({error: 'Could not retrieve tasks'})
        })
})

router.post('/', (req, res) => {
    if (!req.body.project_id) {
        res.status(400).json({message: 'Post request must include a project_id'})
    } else {
        tasks.add(req.body)
            .then(task => {
                res.status(201).json(task)
            })
            .catch(err => {
                res.status(500).json({error: 'Could not add task'})
            })
    }    
})

module.exports = router;