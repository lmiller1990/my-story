<template>
  <div class="container">
    
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
