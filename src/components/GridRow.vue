<template>
  <div class="row">
    <Column v-for="column in row.columns" :columnCount="row.columns.length" :column="column" key="column.id" />
    <div class="column modifier">
      <div @click="addColumn" class="add icon">+</div>
      <div @click="removeColumn" class="remove icon">-</div>
    </div>
  </div>
</template>

<script>
  import Column from '@/components/Column.vue'
  export default {
    name: 'GridRow',
    components: { Column },
    props: {
      row: {
        type: Object,
        default () {
          return { id: 0, columns: [] }
        }
      }
    },
    methods: {
      addColumn () {
        this.$store.commit('ADD_COLUMN', this.row.id)
      },
      removeColumn () {
        this.$store.commit('REMOVE_COLUMN', this.row.id)
      }
    }
  }
</script>

<style scoped>
.row {
  display: flex;
}

.icon {
  display: inline-block;
}

.column.modifier {
  margin-left: 2em;
}
</style>
