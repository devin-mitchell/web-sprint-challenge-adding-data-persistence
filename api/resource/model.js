const db = require('../../data/dbConfig')

function getResources() {
    return db('resources')
}

function createResource(newResource) {

}

module.exports = {
    getResources,
    createResource
}
