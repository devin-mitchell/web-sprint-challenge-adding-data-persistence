const express = require('express')
const ProjModel = require('./model')

const router = express.Router()

router.get('/', (req, res, next) => {
    ProjModel.getProjects()
        .then(projects => {
            res.status(200).json(projects)
        })
        .catch(next)
})

router.post('/', (req, res, next) => {
    ProjModel.createProject(req.body)
        .then(project => {
            res.status(201).json(project)
        })
        .catch(next)
})

module.exports = router
