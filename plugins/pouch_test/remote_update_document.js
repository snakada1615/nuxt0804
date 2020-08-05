// Requiring the package
const PouchDB = require('PouchDB')

// Creating the database object
const db = new PouchDB('http://snakada:Bluecity1965@localhost:5984/my_database')

// Preparing the document for update
const doc_new = {
  _id: '002',
  _rev: '4-b7a38016651726b34063a0f097f27116',
  age: '85',
}

// Inserting Document
db.put(doc_new, function (err, doc) {
  if (err) {
    return console.log(err)
  } else {
    console.log(doc)
  }
})
