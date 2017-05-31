import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  currentSlideId: 0,
  slides: [
    {
      id: 0,
      rows: [
        {
          id: 0,
          columns: [
            { id: 0, msg: 'Hi!' },
            { id: 1, msg: 'A long that msg with short words but long' }
          ]
        },
        {
          id: 1,
          columns: [{ id: 0, msg: 'Message' }]
        }
      ]
    }
  ]
}

export const mutations = {
  ADD_ROW (state) {
    let current = state.slides.filter(s => s.id === state.currentSlideId)[0]
    if (current) {
      let _id = Math.max.apply(Math, current.rows.map(s => s.id))
      current.rows.push({ id: _id += 1, columns: [{ id: 1 }] })
    }
  },
  REMOVE_ROW (state) {
    let current = state.slides.filter(s => s.id === state.currentSlideId)[0]
    if (current && current.rows.length > 1) {
      current.rows.splice(-1, 1)
    }
  },
  ADD_COLUMN (state, rowId) {
    let current = state.slides.filter(s => s.id === state.currentSlideId)[0].rows.filter(r => r.id === rowId)[0]
    if (current) {
      let _id = Math.max.apply(Math, current.columns.map(c => c.id))
      if (_id === -Infinity) _id = 0
      current.columns.push({ id: _id += 1 })
    }
  },
  REMOVE_COLUMN (state, rowId) {
    let current = state.slides.filter(s => s.id === state.currentSlideId)[0].rows.filter(r => r.id === rowId)[0]
    if (current && current.columns.length > 1) {
      current.columns.splice(-1, 1)
    }
  }
}

const actions = {

}

const getters = {
  currentSlide (state) {
    return state.slides.filter(s => s.id === state.currentSlideId)[0]
  }
}

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})
