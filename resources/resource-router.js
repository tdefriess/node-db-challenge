const express = require('express');

const resources = require('./resourceModel');

const router = express.Router();

router.get('/', (req, res) => {
    resources.find()
        .then(resources => {
            res.status(200).json(resources)
        })
        .catch(err => {
            res.status(500).json({error: 'Could not retrieve resources'})
        })
})

router.post('/', (req, res) => {
    resources.add(req.body)
        .then(resource => {
            res.status(201).json(resource)
        })
        .catch(err => {
            res.status(500).json({error: 'Could not add resource'})
        })
})

module.exports = router;