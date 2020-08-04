<template>
  <div class="mypouch"></div>
</template>

<script>
export default {
  name: 'PouchTestVue',
}
// Requiring the package
const PouchDB = require('PouchDB')

// Creating the database object
const db = new PouchDB('my_database2').default

// Database information
db.info(function (err, info) {
  if (err) {
    return console.log(err)
  } else {
    console.log(info)
  }
})
</script>

<style scoped></style>
