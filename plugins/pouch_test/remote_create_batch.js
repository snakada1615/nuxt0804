// Requiring the package
const PouchDB = require('PouchDB')

// Creating the database object
const db = new PouchDB('http://snakada:Bluecity1965@localhost:5984/my_database')

// Preparing the documents array

const doc1 = { _id: '001', name: 'Ram', age: 23, Designation: 'Programmer' }
const doc2 = { _id: '002', name: 'Robert', age: 24, Designation: 'Programmer' }
const doc3 = { _id: '003', name: 'Rahim', age: 25, Designation: 'Programmer' }

const docs = [doc1, doc2, doc3]

// Inserting Documents
db.bulkDocs(docs, function (err, response) {
  if (err) {
    return console.log(err)
  } else {
    console.log('Documents created Successfully')
  }
})
