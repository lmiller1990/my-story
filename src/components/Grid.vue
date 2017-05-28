<template>
  <div class="container">
    <Row v-for="row in currentSlide.rows" key="row.id" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Row from '@/components/Row'
export default {
  name: 'Grid',

  components: { Row },

  computed: {
    ...mapGetters({
      currentSlide: 'currentSlide'
    })
  }
}
</script>

<style scoped>
</style>
