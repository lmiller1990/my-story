import { mutations } from '@/store/store'

const { ADD_ROW, REMOVE_ROW } = mutations

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
