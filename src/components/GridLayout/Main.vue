<template>
  <div class="container">
    <div class="grid">
      <div class="cell" v-for="(i, idx) in new Array(30)">
        <div v-if="idx !== 15">
          {{ idx }}
        </div>
        <div v-else>
          {{ longText  }}
        </div>
        
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        longText: 'This is some really long text to test what happens when the text is too large for a cell.'
      }
    },
    computed: {
      slide () {
        return this.$store.state.slides[0]
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
  grid-template-columns: 50% 50%; 

}
</style>
