// Requiring the package
const PouchDB = require('PouchDB')

// Creating the database object
const db = new PouchDB('http://snakada:Bluecity1965@localhost:5984/my_database')
console.log('Database created Successfully.')

// Database information
db.info(function (err, info) {
  if (err) {
    return console.log(err)
  } else {
    console.log(info)
  }
})

// deleting database
db.destroy(function (err, response) {
  if (err) {
    return console.log(err)
  } else {
    console.log('Database Deleted')
  }
})
