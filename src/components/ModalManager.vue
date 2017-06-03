<template>
  <div class="modal">
    <component :is="component" />
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  export default {
    name: 'ModalManager',
    computed: {
      ...mapState({
        currentModal: state => state.currentModal
      }),
      component () {
        return this.currentModal !== null
          ? this.currentModal.component
          : null
      }
    }
  }
</script>

<style scoped>
.modal {
  position: absolute;
}
</style>
