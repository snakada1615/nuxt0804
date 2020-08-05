// Requiring the package
const PouchDB = require('PouchDB')

// Creating the database object
const db = new PouchDB('http://Nakada:Bluecity1965@localhost:5984/my_database')

// Database information
db.info(function (err, info) {
  if (err) {
    return console.log(err)
  } else {
    console.log(info)
  }
})
