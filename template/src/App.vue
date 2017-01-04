<template>
<div id="app">
  {{test3}} {{test2}} {{test}} {{testArray2}}
  <div @click="add_stuff">
    CLICK
  </div>
  <router-link to="/">/HOME</router-link>
  <router-link to="/page1">/page1</router-link>
  <router-link to="/page2">/page2</router-link>
  <router-view></router-view>
  {{response}}
  <div @click="get_stuff">
    getStuff
  </div>
</div>
</template>

<script>
import {
  mapGetters
} from 'vuex'

export default {
  name: 'app',
  computed: {
    ...mapGetters([
      'testArray2',
      'test2',
      'test3',
      'response',
      'test'
    ])
  },
  components: {},
  methods: {
    add_stuff() {
      this.$store.dispatch('addStuff', Math.floor(Math.random() * 100))
    },
    get_stuff() {
      this.$store.dispatch('getStuff')
        .then(response => console.log('r', response))
        .catch(err => console.log(err))
    }
  }
}
</script>

<style>
#app {}
</style>
