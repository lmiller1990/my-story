import { mutations } from '@/store/store'

const { ADD_ROW, REMOVE_ROW, ADD_COLUMN, REMOVE_COLUMN } = mutations

describe('ADD_ROW', () => {
  it('adds a row with the corrent number of columns', () => {
    const state = {
      currentSlideId: 0,
      slides: [
        { id: 0, rows: [] }
      ]
    }

    ADD_ROW(state)

    expect(state.slides.length).to.eql(1)
  })
})

describe('REMOVE_ROW', () => {
  it('adds removes if there is one to remove', () => {
    const state = {
      currentSlideId: 0,
      slides: [
      ]
    }

    REMOVE_ROW(state)

    expect(state.slides.length).to.eql(0)

    state.slides.push({ id: 1 })

    expect(state.slides.length).to.eql(1)
  })
})

describe('ADD_COLUMN', () => {
  it('adds a column to the correct row', () => {
    const state = {
      currentSlideId: 1,
      slides: [{
        id: 1, rows: [{ id: 3, columns: [] }]
      }]
    }

    ADD_COLUMN(state, 3) 

    expect(state.slides[0].rows[0].columns.length).to.eql(1)
    expect(state.slides[0].rows[0].columns[0].id).to.eql(1)
  })
})
