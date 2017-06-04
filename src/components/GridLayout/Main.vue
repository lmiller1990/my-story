<template>
  <div>
    <div class="container">
      <div :style="columnsByPercentage" class="grid">
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
    <input type="number" v-model="columns" />
    <input type="number" v-model="rows" />
  </div>
</template>

<script>
  export default {
    data () {
      return {
        columns: 3,
        rows: 3,
        longText: 'This is some really long text to test what happens when the text is too large for a cell.'
      }
    },
    computed: {
      slide () {
        return this.$store.state.slides[0]
      },
      cells () {
        return new Array(this.rows * this.columns)
      },
      columnsByPercentage () {
        let _d = 100 / this.columns
        let _s = ''
        for (let i = 0; i < this.columns; i++) {
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
