// Requiring the package
const PouchDB = require('PouchDB')
const dbs = ['fct', 'dri', 'pop', 'crop_national', 'crop_name']
let localdb = 'fct'
let remotedb = 'http://snakada:Bluecity1965@localhost:5984/fct'

// Replicating a local database to Remote
dbs.map(function (value, index, array) {
  localdb = value
  remotedb = 'http://snakada:Bluecity1965@localhost:5984/' + value
  PouchDB.replicate(remotedb, localdb)
})

console.log('Database replicated successfully')
