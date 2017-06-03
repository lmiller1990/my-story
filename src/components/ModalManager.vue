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
.container {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
}
</style>
