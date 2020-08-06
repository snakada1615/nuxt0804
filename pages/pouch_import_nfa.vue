<template>
  <h4>this is for importing NFA data</h4>
</template>

<script>
// const PouchDB = require('pouchdb')
import PouchDB from 'pouchdb'
export default {
  name: 'PoucnImportNfa',
}
const dbs = ['fct', 'dri', 'pop', 'crop_national', 'crop_name']

// Replicating a local database to Remote
dbs.map(function (value, index, array) {
  const localdb = './assets/dbs/' + value
  console.log(localdb)
  const remotedb = 'http://snakada:Bluecity1965@localhost:5984/' + value
  console.log(remotedb)
  PouchDB.replicate(remotedb, localdb)
})

console.log('Database replicated successfully')
</script>

<style scoped></style>
