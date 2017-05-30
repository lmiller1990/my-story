<template>
  <div class="column input">
    <label>Columns</label>
    <div @click="addColumn" class="add icon">+</div>
    <div @click="removeColumn" class="remove icon">-</div>
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
  border: 1px dotted white;
}

.icon {
  display: inline-block;
}
</style>
