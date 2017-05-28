<template>
  <div class="row">
    <div v-for="column in row.columns" class="column">
        {{ column.id }}
    </div>
  </div>
</template>

<script>
  export default {
    name: 'GridRow',
    props: {
      row: {
        type: Object,
        default () {
          return { id: 0, columns: [] }
        }
      }
    }
  }
</script>

<style scoped>
.row {
  display: flex;
}

.column {
  border: 1px dotted purple;
  flex-grow: 1;
}
</style>
