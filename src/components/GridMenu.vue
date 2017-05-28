<template>
  <div class="container">
    <label>Rows</label>
    <div @click="addRow" class="add icon">+</div>
    <div @click="removeRow" class="remove icon">-</div>
    <Row v-for="row in currentSlide.rows" :row="row" key="row.id" />
  </div>
</template>

<script>
import Row from '@/components/Row'
import { mapGetters } from 'vuex'

export default {
  name: 'Hello',

  components: { Row },

  data () {
    return {
    }
  },

  computed: {
    ...mapGetters({
      currentSlide: 'currentSlide'
    })
  },

  methods: {
    addRow () {
      this.$store.commit('ADD_ROW')
    },
    removeRow () {
      this.$store.commit('REMOVE_ROW')
    }
  }
}
</script>

<style scoped>
.icon { 
  display: inline-block;
}
</style>
