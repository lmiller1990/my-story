<template>
  <div class="container">
    <div class="slide">
      <GridRow v-for="row in currentSlide.rows" :row="row" key="row.id"/>
    </div>
    <div class="row menu">
      <Row v-for="row in currentSlide.rows" :row="row" key="row.id" />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Row from '@/components/Row'
import GridRow from '@/components/GridRow'

export default {
  name: 'Grid',

  components: { Row, GridRow },

  computed: {
    ...mapGetters({
      currentSlide: 'currentSlide'
    })
  }
}
</script>

<style scoped>
.slide {
  width: 25em;
}

.row.menu {
  display: flex;
  flex-direction: column;
  margin-left: 3em;
}

.container {
  display: flex;
  justify-content: center;
}
</style>
