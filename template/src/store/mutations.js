import {set
} from 'vue'

export default {
  ADD_STUFF(state,
    stuff
  ) {
    console.log('STUFF', stuff);
    state.testArray.push(stuff)
  },
  REMOVE_STUFF(state, index) {
    state.testArray.splice(index, 1)
  },
  GOT_STUFF(state,
    stuff
  ) {
    console.log('STUFF', stuff);
    state.response = stuff
  }
}
