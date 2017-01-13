import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    txt: '',
    charChart: (function () {
      let codes = {}
      for (let i = 33; i <= 126; i++) {
        let c = String.fromCharCode(i)
        codes[c] = 0
      }
      return codes
    })()
  },
  getters: {
    wordCount: function (state) {
      return state.txt.trim().split(' ').length
    },
    charCount: state => {
      return state.txt.length
    },
    charChart: function (state) {
      let codes = {}
      let chart = []
      for (let i = 33; i <= 126; i++) {
        let c = String.fromCharCode(i)
        codes[c] = 0
      }
      for (let i = 0; i < state.txt.length; i++) {
        let c = state.txt.charAt(i)
        codes[c]++
      }
      for (let i = 33; i <= 126; i++) {
        let c = String.fromCharCode(i)
        let data = {
          char: c,
          frequency: codes[c]
        }
        chart.push(data)
      }
      return chart
    }
  },
  mutations: {
    updateText (state, newText) {
      state.txt = newText
    }
  }
})

export default store
