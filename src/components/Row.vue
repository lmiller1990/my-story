<template>
  <div class="container">
    Row
    <div class="column input">
      <label>Columns</label>
      <div @click="addColumn" class="add icon">+</div>
      <div @click="removeColumn" class="remove icon">-</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Row',

  props: ['row'],

  methods: {
    addColumn () {
      this.$store.commit('ADD_COLUMN', this.row.id)
    },
    removeColumn () {
      this.$store.commit('REMOVE_COLUMN', this.row.id)
    }
  }
}
</script>

<style scoped>
.column.input {
  display: inline-block;
  margin-left: 5em;
}

.icon {
  display: inline-block;
}
</style>
