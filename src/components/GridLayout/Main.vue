<template>
  <div class="container">
    <div :style="rows" class="grid">
      <div class="cell" v-for="i in cells">
        <div v-if="i !== 15">
          {{ i }}
        </div>
        <div v-else>
          {{ longText  }}
        </div>
        
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        cells: [
          1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16
        ],
        longText: 'This is some really long text to test what happens when the text is too large for a cell.'
      }
    },
    computed: {
      slide () {
        return this.$store.state.slides[0]
      },
      rows () {
        let _d = 100 / 3
        let _s = ''
        for (let i = 0; i < 3; i++) {
          _s += _d + '% '
        }
        return { 'grid-template-columns': _s }
      }
    }
  }
</script>

<style scoped>
.container {
  width: 18em;
  height: 40em;
  border: 1px solid purple;
}
.cell {
  border: 1px dotted green;
}
.grid {
  display: grid;
  height: 100%;
  /*grid-template-columns: 50% 50%; */

}
</style>
