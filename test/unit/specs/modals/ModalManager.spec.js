import Vue from 'vue'
import { mutations } from '@/store/store'
import ModalManager from '@/components/ModalManager'
import ColumnContextModal from '@/components/Modals/ColumnContextModal'

const { SET_MODAL } = mutations

describe('SET_MODAL', () => {
  it('creates a modal dynamically using :is', () => {
    const state = {
      currentModal: null
    }

    SET_MODAL(state, {
      component: ColumnContextModal,
      x: 0,
      y: 0
    })

    const Constructor = Vue.extend(ModalManager)
    const modalManager = new Constructor({
      store: { state: state }
    }).$mount()

    expect(modalManager.$el.querySelector('.modal').textContent.trim()).to.equal('Ok')
  })
})
