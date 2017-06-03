<template>
  <div class="container">
    <ModalManager />
    <GridMenu />
    <Grid />
   </div>
</template>

<script>
import GridMenu from '@/components/GridMenu'
import Grid from '@/components/Grid'
import ModalManager from '@/components/ModalManager'

export default {
  components: { GridMenu, Grid, ModalManager }
}
</script>

<style scoped>
</style>
