<template>
  <div class="container">
    Row
    <div class="column input">
      <label>Columns</label>
      <input type="number" @input="addColumn" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Row',

  props: ['row'],

  methods: {
    addColumn (evt) {
      let val = evt.target.value < this.row.columns.length ? -1 : 1
      if (val === -1) {
        this.$store.commit('REMOVE_COLUMN', this.row.id)
      } else {
        this.$store.commit('ADD_COLUMN', this.row.id)
      }
    }
  }
}
</script>

<style scoped>
.column.input {
  display: inline-block;
  margin-left: 5em;
}
</style>
