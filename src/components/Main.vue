<template>
  <div class="container">
    <Grid />
    <GridMenu />
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
