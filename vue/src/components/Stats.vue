<template>
  <div id="stats">
    <div>
      Word count: <span id="wordcount">{{ wordCount }}</span>
    </div>
    <div>
      Character count: <span id="charcount">{{ charCount }}</span>
    </div>
    <div id="words">
      <textarea v-on:keyup="updateText()" v-model="inputWords" id="wordarea" rows="30" cols="100"></textarea>
    </div>
  </div>
</template>

<script>
export default {
  name: 'stats',
  data() {
    return {
      inputWords: ''
    }
  },
  computed: {
    txt () {
      return this.$store.state.txt
    },
    wordCount () {
      return this.$store.getters.wordCount
    },
    charCount () {
      return this.$store.getters.charCount
    }
  },
  methods: {
    updateText() {
      this.$store.commit('updateText', this.inputWords)
    }
  }
}
</script>
