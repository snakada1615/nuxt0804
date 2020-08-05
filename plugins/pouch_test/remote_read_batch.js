// Requiring the package
const PouchDB = require('PouchDB')

// Creating the database object
const db = new PouchDB('http://snakada:Bluecity1965@localhost:5984/my_database')

// Retrieving all the documents in PouchDB
db.allDocs({ include_docs: true }, function (err, docs) {
  if (err) {
    return console.log(err)
  } else {
    console.log(docs.rows)
  }
})
