<template>
  <div id="replay">
    {{ txt }}
  </div>
</template>

<script>
export default {
  name: 'replay',
  computed: {
    txt () {
      return this.$store.state.txt
    },
  },
}
</script>
