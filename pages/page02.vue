<template>
  <div class="container">
    <h4>this is page02</h4>
    {{ state }}
    <button @click="getdata" />
    <div>
      <b-form-select v-model="myfct" :options="myitems"></b-form-select>
      <div class="mt-3">
        Selected: <strong>{{ myfct }}</strong>
      </div>
    </div>
  </div>
</template>

<script>
import PouchDB from 'pouchdb'

export default {
  data() {
    return {
      myfct: 'null',
      state: 'happy day',
      myitems: [],
    }
  },
  mounted() {
    const tmpresult = this.myitems
    const myDB = new PouchDB('../assets/dbs/fct')
    console.log('2nd')
    myDB
      .allDocs({ include_docs: true })
      .then(function (docs) {
        console.log('1st')
        docs.rows.map(function (row) {
          const tmpitem = {}
          tmpitem.text = row.doc.Food_name
          tmpitem.value = row.doc.food_item_id
          tmpresult.push(tmpitem)
        })
      })
      .catch(function (err) {
        console.log(err)
      })
  },
  methods: {
    getdata() {
      const tmpresult = this.myitems
      const myDB = new PouchDB('../assets/dbs/fct')
      myDB
        .allDocs({ include_docs: true })
        .then(function (docs) {
          docs.rows.map(function (row) {
            const tmpitem = {}
            tmpitem.text = row.doc.Food_name
            tmpitem.value = row.doc.food_item_id
            tmpresult.push(tmpitem)
          })
        })
        .catch(function (err) {
          console.log(err)
        })
    },
    saveItem() {
      this.items.push(this.newItem)
      this.newItem = ''
    },
  },
}
</script>

<style scoped></style>
