const db = require('../../data/dbConfig')

function getProjects() {
    return db('projects')
}

function createProject(newProject) {

}

module.exports = {
    getProjects,
    createProject
}
