// Requiring the package
const PouchDB = require('PouchDB')

// Creating the database object
const db = new PouchDB('http://snakada:Bluecity1965@localhost:5984/my_database')

// Preparing the document
const docs = [
  { _id: '002', _rev: '6-65490230146c8d1075e950294c1a02bc', _deleted: true },
  { _id: '003', _rev: '2-fa113149ba618eda77f73072974a2bc1', _deleted: true },
]

// Deleting Documents
db.bulkDocs(docs, function (err, response) {
  if (err) {
    return console.log(err)
  } else {
    console.log('Documents deleted Successfully')
  }
})
