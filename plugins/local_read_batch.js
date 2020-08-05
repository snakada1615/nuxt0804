// Requiring the package
const PouchDB = require('PouchDB')

// Creating the database object
const db = new PouchDB('http://localhost:3000/fct')

// Retrieving all the documents in PouchDB
db.allDocs({ include_docs: true }, function (err, docs) {
  if (err) {
    return console.log(err)
  } else {
    console.log(docs.rows)
  }
})
