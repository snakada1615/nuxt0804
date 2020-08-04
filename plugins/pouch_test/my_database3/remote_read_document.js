// Requiring the package
const PouchDB = require('PouchDB')

// Creating the database object
const db = new PouchDB('http://snakada:Bluecity1965@localhost:5984/my_database')

// Reading the contents of a document
db.get('001', function (err, doc) {
  if (err) {
    return console.log(err)
  } else {
    console.log(doc)
  }
})
