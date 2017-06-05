<template>
  <div @click="openModal">
    {{ cell.id }}
  </div>
</template>

<script>
  import CellContextModal from '@/components/Modals/CellContextModal'
  export default {
    name: 'Cell',
    props: {
      cell: {
        type: Object,
        default () {
          return { id: 0, text: 'text' }
        }
      }
    },
    methods: {
      openModal () {
        this.$store.commit('SET_MODAL', {
          component: CellContextModal,
          x: 0,
          y: 0,
          payload: {
            cell: this.cell
          }
        })
      }
    }
  }
</script>

<style scoped>
</style>
