<template>
  <div class="modal container">
    <div>
      <div class="form container">
        <div class="text form" contenteditable>
        </div>
        <button class="ok button" @click="save">Ok</button>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapState } from 'vuex'

  export default {
    name: 'ColumnContextModal',

    computed: {
      ...mapState({
        currentModal: state => state.currentModal
      })
    },
    methods: {
      save () {
        this.$store.commit('SET_COLUMN_TEXT', {
          text: this.$el.querySelector('.text.form').textContent,
          rowId: this.currentModal.payload.rowId,
          columnId: this.currentModal.payload.columnId
        })
        this.$store.commit('SET_MODAL', {})
      }
    },
    mounted () {
      this.$el.querySelector('.text.form').textContent = this.currentModal.payload.text
    }

  }
</script>

<style scoped>
.modal.container {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  /*display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;*/
}

.form.container {
  margin-top: 30%;
  margin-left: 5%;
  margin-right: 5%;
  background-color: white;
}

.text.form {
  text-align: center;
}

.button {
  border: 1px dotted grey;
  background-color: white;
  width: 100%;
}
</style>
