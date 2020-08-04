// Requiring the package
const PouchDB = require('PouchDB')

// Creating the database object
const db = new PouchDB('http://snakada:Bluecity1965@localhost:5984/my_database')

// Preparing the document
doc = {
  _id: '002',
  name: 'Raju',
  age: 23,
  designation: 'Designer',
}
// Inserting Document
db.put(doc, function (err, response) {
  if (err) {
    return console.log(err)
  } else {
    console.log('Document created Successfully')
  }
})
