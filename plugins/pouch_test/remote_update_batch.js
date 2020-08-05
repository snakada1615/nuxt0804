// Requiring the package
const PouchDB = require('PouchDB')

// Creating the database object
const db = new PouchDB('http://snakada:Bluecity1965@localhost:5984/my_database')

// Preparing the document
const docs = [
  { _id: '001', _rev: '1-726c21d37502ecac8a971103bda0741a', age: 24 },
  { _id: '002', _rev: '5-3c7c73e27516ef8162fa659ed8ee5d16', age: 26 },
  { _id: '003', _rev: '1-3033b5a78e915c52fd37325d42eb3935', age: 27 },
]

// Inserting Document
db.bulkDocs(docs, function (err, response) {
  if (err) {
    return console.log(err)
  } else {
    console.log(+'Documents Updated Successfully')
  }
})
