<template>
  <div class="container">
    <div class="slide">
      <GridRow v-for="row in currentSlide.rows" :row="row" key="row.id"/>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import GridRow from '@/components/GridRow'

export default {
  name: 'Grid',

  components: { GridRow },

  computed: {
    ...mapGetters({
      currentSlide: 'currentSlide'
    })
  }
}
</script>

<style scoped>
.slide {
  width: 20em;
  height: 40em;
  /*border: 1px dashed blue;*/
  display: grid;
  justify-items: stretch;
}

.container {
  display: flex;
  justify-content: center;
}
</style>
