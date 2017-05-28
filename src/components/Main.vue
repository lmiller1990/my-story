<template>
  <div class="container">
    <GridMenu />
    <Grid />
  </div>
</template>

<script>
import GridMenu from '@/components/GridMenu'
import Grid from '@/components/Grid'

export default {
  components: { GridMenu, Grid },

  data () {
    return {
    }
  }
}
</script>

<style scoped>
</style>
