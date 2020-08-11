import PouchDB from '//cdn.jsdelivr.net/pouchdb/latest/pouchdb.min.js'

const doc = {
  _id: 'mittens',
  name: 'Mittens',
  occupation: 'kitten',
  age: 3,
  hobbies: [
    'playing with balls of yarn',
    'chasing laser pointers',
    "lookin' hella cute",
  ],
}

// Destroy the database before doing anything, because I want
// you to see the same thing if you reload.
// Ignore the man behind the curtain!

new PouchDB('sample')
  .destroy()
  .then(function () {
    return new PouchDB('sample')
  })
  .then(function (db) {
    //
    // IMPORTANT CODE STARTS HERE
    //
    db.put(doc)
      .then(function () {
        return db.get('mittens')
      })
      .then(function (doc) {
        doc.age = 4
        return db.put(doc)
      })
      .then(function () {
        return db.get('mittens')
      })
      .then(function (doc) {
        console.log('We updated a kitten: ' + JSON.stringify(doc))
      })
    //
    // IMPORTANT CODE ENDS HERE
    //
  })
