import mutations from '@/store/mutations'
import * as types from '@/store/mutation-types'

const testItems = {
  items1: {
    1: { id: 1, title: 'items1 1' },
    2: { id: 2, title: 'items1 2' }
  },
  items2: {
    1: { id: 1, title: 'items2 1' },
    2: { id: 2, title: 'items2 2' }
  },
  items3: {
    1: { id: 1, title: 'items3 1' }
  }
}
const addItems = {
  items1: {
    3: { id: 3, title: 'items1 3' }
  },
  items2: {
    1: { id: 1, title: 'items2 1 changed' }
  }
}

describe('mutations', () => {
  describe('SET_MODELS', () => {
    it('should set models', () => {
      // Генерация пустого тестового хранилища с ключами data
      let state = Object.keys(testItems).reduce((prev, key) => {
        return { ...prev, [key]: { data: {} } }
      }, {})
      mutations[types.SET_MODELS](state, testItems)
      state.items1.data
        .should.equal(testItems['items1'])
      state.items2.data
        .should.equal(testItems['items2'])
    })
  })
  describe('REMOVE_MODELS', () => {
    it('should remove models', () => {
      let state = {
        items1: { data: testItems['items1'] },
        items2: { data: testItems['items2'] },
        items3: { data: testItems['items3'] }
      }
      mutations[types.REMOVE_MODELS](state, {
        items1: testItems['items1'],
        items2: { 1: testItems['items2'][1] }
      })
      Object.keys(state.items1.data).length
        .should.equal(0)
      Object.keys(state.items2.data).length
        .should.equal(1)
      state.items3.data
        .should.equal(testItems['items3'])
    })
  })
  describe('ADD_MODELS', () => {
    it('should add or set models', () => {
      let state = {
        items1: { data: testItems['items1'] },
        items2: { data: testItems['items2'] },
        items3: { data: testItems['items3'] }
      }
      mutations[types.ADD_MODELS](state, addItems)
      // console.log('state', state.items1.data)
      // Object.keys(state.items1.data).length
      //   .should.equal(3)
      // Object.keys(state.items2.data).length
      //   .should.equal(2)
      // Object.keys(state.items3.data).length
      //   .should.equal(1)
    })
  })
})
