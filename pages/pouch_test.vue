<template>
  <div class="mypouch"></div>
</template>

<script>
export default {
  name: 'PouchTestVue',
}
const PouchDB = require('pouchdb')
  data: {
    db: new PouchDB('notes'), // db instance
    notes: {}, // list of all notes
    colorPallettes: [
      '#96ceb4',
      ' #ffeead',
      ' #ff6f69',
      ' #ffcc5c',
      '#a8e6cf',
      '#dcedc1',
      '#ffd3b6',
    ], // color palettes for choosing custom background
}
</script>

<style scoped></style>
