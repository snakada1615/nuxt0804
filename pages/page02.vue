<template>
  <div class="container">
    <h4>this is page02</h4>
    <div>
      <label>
        Select Country
        <b-form-select
          v-model="myCountry"
          :options="countries"
          block
          @change="setRegion1(alldata, myCountry)"
        ></b-form-select>
      </label>
    </div>
    <div>
      <label>
        Select Region1
        <b-form-select
          v-model="myRegion1"
          :options="regions1"
          @change="setRegion2(alldata, myRegion1)"
        ></b-form-select>
      </label>
    </div>
    <div>
      <label>
        Select Region2
        <b-form-select
          v-model="myRegion2"
          :options="regions2"
          @change="setRegion3(alldata, myRegion2)"
        ></b-form-select>
      </label>
    </div>
    <div>
      <label>
        Select Region3
        <b-form-select v-model="myRegion3" :options="regions3"></b-form-select>
      </label>
    </div>
    <div>
      <label>
        Put community name
        <b-input v-model="myRegion4"></b-input>
      </label>
    </div>
    <p v-show="isFormValid" class="text-info">
      now you can move to next step
    </p>
    <p v-show="!isFormValid" class="text-warning">
      please select your target location
    </p>
    <b-button @click="saveItem">save</b-button>
  </div>
</template>

<script>
import PouchDB from 'pouchdb'

export default {
  data() {
    return {
      alldata: {},
      myCountry: '',
      myRegion1: '',
      myRegion2: '',
      myRegion3: '',
      myRegion4: '',
      countries: [],
      regions1: [],
      regions2: [],
      regions3: [],
      userinfo: {
        _id: '',
        name: '',
        organization: '',
        title: ',',
      },
      myStatus: {
        user_id: '',
        myLocation: '',
        myCrop: '',
        myTarget: '',
        myDiet: '',
        stepid: '',
      },
    }
  },
  computed: {
    isFormValid() {
      return !!(
        this.myCountry &&
        this.myRegion1 &&
        this.myRegion2 &&
        this.myRegion3
      )
    },
  },
  mounted() {
    const myDB = new PouchDB('../assets/dbs/countries')
    const myDB2 = new PouchDB('../assets/dbs/mystatus')
    const vm = this
    myDB
      .allDocs({ include_docs: true })
      .then(function (docs) {
        vm.alldata = docs
        vm.setCountry(docs)
      })
      .then(function () {
        myDB2.allDocs({ include_docs: true }).then(function (res) {
          if (res) {
            vm.userinfo._id = res._id
            vm.userinfo.name = res.name
            vm.userinfo.organization = res.organization
            vm.userinfo.title = res.title
          }
        })
      })
      .catch(function (err) {
        console.log(err)
      })
  },
  methods: {
    setCountry(dat) {
      const vm = this
      const uniqCountry = []
      dat.rows.map(function (row) {
        const tmpitem = {}
        const tmpcnt = row.doc.fields.GID_0
        if (!uniqCountry.includes(tmpcnt)) {
          uniqCountry.push(tmpcnt)
          tmpitem.text = row.doc.fields.NAME_0
          tmpitem.value = tmpcnt
          vm.countries.push(tmpitem)
        }
      })
    },
    setRegion1(dat, mycountry) {
      const vm = this
      const uniqReg = []
      vm.regions1 = []
      vm.regions2 = []
      vm.regions3 = []
      vm.myRegion1 = []
      vm.myRegion2 = []
      vm.myRegion3 = []
      dat.rows.map(function (row) {
        const tmpitem = {}
        const tmpcnt = row.doc.fields.GID_0
        const tmpreg = row.doc.fields.GID_1
        if (tmpcnt === mycountry) {
          if (!uniqReg.includes(tmpreg)) {
            uniqReg.push(tmpreg)
            tmpitem.text = row.doc.fields.NAME_1
            tmpitem.value = row.doc.fields.GID_1
            vm.regions1.push(tmpitem)
          }
        }
      })
    },
    setRegion2(dat, mycountry) {
      const vm = this
      const uniqReg = []
      vm.regions2 = []
      vm.regions3 = []
      vm.myRegion2 = []
      vm.myRegion3 = []
      dat.rows.map(function (row) {
        const tmpitem = {}
        const tmpcnt = row.doc.fields.GID_1
        const tmpreg = row.doc.fields.GID_2
        if (tmpcnt === mycountry) {
          if (!uniqReg.includes(tmpreg)) {
            uniqReg.push(tmpreg)
            tmpitem.text = row.doc.fields.NAME_2
            tmpitem.value = row.doc.fields.GID_2
            vm.regions2.push(tmpitem)
          }
        }
      })
    },
    setRegion3(dat, mycountry) {
      const vm = this
      const uniqReg = []
      vm.regions3 = []
      vm.myRegion3 = []
      dat.rows.map(function (row) {
        const tmpitem = {}
        const tmpcnt = row.doc.fields.GID_2
        const tmpreg = row.doc.fields.GID_3
        if (tmpcnt === mycountry) {
          if (!uniqReg.includes(tmpreg)) {
            uniqReg.push(tmpreg)
            tmpitem.text = row.doc.fields.NAME_3
            tmpitem.value = row.doc.fields.GID_3
            vm.regions3.push(tmpitem)
          }
        }
      })
    },
    // loadItem() {
    //   const vm = this
    // },
    saveItem() {
      const vm = this
      if (vm.isFormValid) {
        const myDB = new PouchDB('../assets/dbs/location')
        // const myDB2 = new PouchDB('../assets/dbs/mystatus')
        const mykey = vm.myselection._id
        if (mykey) {
          console.log('updating exsisting data')
          // fetch mittens
          myDB.get(mykey).then(function (doc) {
            // update fields
            doc.myCountry = vm.myCountry
            doc.myRegion1 = vm.myRegion1
            doc.myRegion2 = vm.myRegion2
            doc.myRegion3 = vm.myRegion3
            // put them back
            myDB.put(doc)
          })
        } else {
          console.log('adding new data')
          const doc = {}
          // update fields
          doc.myCountry = vm.myCountry
          doc.myRegion1 = vm.myRegion1
          doc.myRegion2 = vm.myRegion2
          doc.myRegion3 = vm.myRegion3
          // put them back
          myDB.post(doc)
        }
      } else {
        alert('please complete input first')
      }
    },
  },
}
</script>

<style scoped></style>
