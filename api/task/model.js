const db = require('../../data/dbConfig')

function getTasks() {
    return db('tasks')
}

function createTask(newTask) {

}

module.exports = {
    getTasks,
    createTask
}
