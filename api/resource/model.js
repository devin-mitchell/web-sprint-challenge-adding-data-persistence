const db = require('../../data/dbConfig')

function getResources() {
    return db('resources')
}

function createResource(newResource) {

}

function getResourceByName(resourceName) {
    return db('resources')
        .where('recources.recource_name', resourceName)
}

module.exports = {
    getResources,
    createResource,
    getResourceByName
}
