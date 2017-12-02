import { mount, createLocalVue } from 'vue-test-utils'
import Vuex from 'vuex'
import GameSelect from '@/components/base_elements/GameSelect'

const games = {
  1: {
    id: 1,
    rule_ids: [1, 2],
    title: 'IceAge'
  },
  2: {
    id: 2,
    rule_ids: [],
    title: 'AppJoy'
  }
}
const localVue = createLocalVue()

localVue.use(Vuex)

describe('GameSelect.vue', () => {
  let getters
  let store

  beforeEach(() => {
    getters = {
      'games/data': () => games
    }

    store = new Vuex.Store({
      getters
    })
  })

  it('should render select with options', () => {
    const wrapper = mount(GameSelect, {
      store,
      localVue,
      propsData: {
        value: ''
      }
    })
    expect(wrapper.find('select')).to.exist
    expect(wrapper.findAll('option')).to.exist
    const firstOption = wrapper.findAll('option').at(0)
    expect(firstOption.text()).to.equal(games[1].title.toString())
    expect(firstOption.element.value).to.equal(games[1].id.toString())
  })

  it('should emit game id on choose game', () => {
    const wrapper = mount(GameSelect, {
      store,
      localVue,
      propsData: {
        value: ''
      }
    })
    const firstOption = wrapper.findAll('option').at(0)
    firstOption.trigger('input')
    expect(wrapper.emitted().input).to.exist
    expect(wrapper.emitted().input[0][0]).to.equal(games[1].id.toString())
  })
})
