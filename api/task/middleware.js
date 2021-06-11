const checkNewTaskBody = (req, res, next) => {
    if (!req.body.task_description) {
        next({
            status: 400,
            message: `new tasks require a description`
        })
    }
}

module.exports = {checkNewTaskBody}