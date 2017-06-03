<template>
  <div :style="columnWidth" class="column">
    <div @click="showTextModal">
      {{ column.id }} {{ column.msg }}
    </div>
  </div>
</template>

<script>
  import ColumnContextModal from '@/components/Modals/ColumnContextModal'
  export default {
    name: 'Column',
    components: { ColumnContextModal },
    props: {
      column: {
        type: Object,
        default () {
          return { id: 0, msg: 'msg' }
        }
      },
      columnCount: {
        type: Number,
        default () { return 1 }
      }
    },
    computed: {
      columnWidth () {
        return { 'flex-basis': 100 / this.columnCount + '%' }
      }
    },
    methods: {
      showTextModal (evt) {
        console.log(evt)
        this.$store.commit('SET_MODAL', {
          component: ColumnContextModal,
          x: 0,
          y: 0
        })
      }
    }
  }
</script>

<style scoped>
.column {
  border: 1px dotted purple;
  flex-grow: 1;
}
</style>
