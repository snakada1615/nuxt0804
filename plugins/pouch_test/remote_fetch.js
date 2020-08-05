// Requiring the package
const PouchDB = require('PouchDB')

const localdb = 'fct'

const remotedb = 'http://snakada:Bluecity1965@localhost:5984/fct'

// Replicating a local database to Remote
PouchDB.replicate(remotedb, localdb)
console.log('Database replicated successfully')
