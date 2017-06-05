<template>
  <div>
    <div class="container">
      <div :style="columnsByPercentage" class="grid">
        <Cell class="cell" v-for="cell in cells" :cell="cell" key="cell.id" />
      </div>
    </div>
    <input type="number" v-model="columns" />
    <input type="number" v-model="rows" />
  </div>
</template>

<script>
  import Cell from '@/components/Cell'
  export default {
    components: {
      Cell
    },
    data () {
      return {
        columns: 3,
        rows: 3
      }
    },
    computed: {
      cells () {
        let arr = []
        for (let c = 0; c < this.columns * this.rows; c++) {
          arr.push({ id: c, text: `Cell no: ${c}` })
        }
        return arr
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
