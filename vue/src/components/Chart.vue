<template>
  <div id="chart">
    <table>
    <tr v-for="char in charChart">
      <th>{{ char.char }}</th><td>{{ char.frequency }}</td>
    </tr>
  </div>
</template>

<script>
export default {
  name: 'chart',
  computed: {
    charChart () {
      return this.$store.getters.charChart
    },
  },
}
</script>
