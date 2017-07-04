const Datastore = require('nedb')
const db = new Datastore({ filename: 'server/db/data/all', autoload: true })

module.exports = {
  getClient () {
    return db
  },
  createClient (config) {
    return new Datastore(config)
  }
}
