<template>
  <div class="container">
    <label>Rows</label>
    <input type="number" @input="addRow" />
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
    addRow (evt) {
      let val = evt.target.value < this.currentSlide.rows.length ? -1 : 1
      if (val === -1) {
        this.$store.commit('REMOVE_ROW')
      } else {
        this.$store.commit('ADD_ROW')
      }
    }
  }
}
</script>

<style scoped>
</style>
