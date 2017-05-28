<template>
  <div class="container">
    Row
    <div class="column input">
      <label>Columns</label>
      <input type="number" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Row',

  data () {
    return {
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
