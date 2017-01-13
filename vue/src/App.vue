<template>
  <div id="app">
    <stats></stats>
    <!--<replay></replay>-->
    <chart></chart>
  </div>
</template>

<script>
import Stats from './components/Stats.vue'
import Replay from './components/Replay.vue'
import Chart from './components/Chart.vue'

export default {
  name: 'app',
  components: {
    Stats,
    Replay,
    Chart,
  }
}
</script>
