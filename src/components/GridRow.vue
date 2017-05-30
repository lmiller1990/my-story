<template>
  <div class="row">
    <div v-for="column in row.columns" class="column">
        {{ column.id }}
    </div>
  </div>
</template>

<script>
  import Row from '@/components/Row'
  export default {
    name: 'GridRow',
    components: { Row },
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
