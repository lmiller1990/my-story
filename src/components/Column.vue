<template>
  <div :style="columnWidth" class="column">
    <div>
      {{ column.id }} {{ column.msg }}
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Column',

    props: {
      column: {
        type: Object,
        default () {
          return { id: 0, msg: 'msg' }
        }
      },
      columnCount: {
        type: Number,
        default () { return 1 }
      }
    },
    computed: {
      columnWidth () {
        return { 'flex-basis': 100 / this.columnCount + '%' }
      }
    }
  }
</script>

<style scoped>
.column {
  border: 1px dotted purple;
  flex-grow: 1;
}
</style>
