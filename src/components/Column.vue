<template>
  <div class="column">
    {{ column.id }}
  </div>
</template>

<script>
  export default {
    name: 'Column',

    props: {
      column: {
        default () {
          return { id: 0, msg: 'msg' }
        }
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
