const express = require('express')
const ResourceModel = require('./model')

const router = express.Router()

router.get('/', (req, res, next) => {
    ResourceModel.getResources()
        .then(resources => {
            res.status(200).json(resources)
        })
        .catch(next)
})

router.use((err, req, res, next) => {
    res.status(err.status || 500).json({
        message: err.message,
        error: err.error,
        stack: err.stack
    })
})

module.exports = router
