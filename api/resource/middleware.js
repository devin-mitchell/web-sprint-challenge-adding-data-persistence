const Resources = require('./model')

const checkNewResourceBody = (req, res, next) => {
    const name = req.body.resource_name
    if (!name) {
        console.log("NO NAME")
        next({
            status: 400,
            message: 'New resources require a name'
        })
    } else {
        Resources.getResourceByName(name)
        .then(resource => {
            console.log("RESOURCE ----->", resource)
            console.log("NAME------>", name)
            if (resource) {
                next({
                    status: 400,
                    message: `The resource, ${name}, already exists.`
                })
            } else {
                next()
            }
        })
        .catch(next)
    } 
}

module.exports = {
    checkNewResourceBody
}