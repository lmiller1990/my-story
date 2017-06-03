<template>
  <div class="container">
    <GridLayout />
    <!--<ModalManager />
    <GridMenu />
    <Grid />-->
   </div>
</template>

<script>
import GridMenu from '@/components/GridMenu'
import GridLayout from '@/components/GridLayout/Main'
import Grid from '@/components/Grid'
import ModalManager from '@/components/ModalManager'

export default {
  components: { GridMenu, Grid, ModalManager, GridLayout }
}
</script>

<style scoped>
</style>
