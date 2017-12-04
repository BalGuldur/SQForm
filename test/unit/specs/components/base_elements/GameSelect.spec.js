import { mount, createLocalVue } from 'vue-test-utils'
import Vuex from 'vuex'
import GameSelect from '@/components/base_elements/GameSelect'
import { games } from '@/stubs'

const localVue = createLocalVue()

localVue.use(Vuex)

describe('GameSelect.vue', () => {
  let getters
  let store
  let wrapper

  beforeEach(() => {
    getters = {
      'games/data': () => games
    }

    store = new Vuex.Store({
      getters
    })

    wrapper = mount(GameSelect, {
      store,
      localVue,
      propsData: {
        value: ''
      }
    })
  })

  describe('render', () => {
    it('should have select', () => {
      wrapper.find('select').element.should.exist
    })
    it('should have options', () => {
      wrapper.find('option').element.should.exist
    })
    it('should right option title', () => {
      const firstOption = wrapper.findAll('option').at(0)
      firstOption.text().should.be.equal(games[1].title.toString())
    })
    it('should right option value', () => {
      const firstOption = wrapper.findAll('option').at(0)
      firstOption.element.value.should.be.equal(games[1].id.toString())
    })
  })

  describe('user interaction', () => {
    it('should emit game id on choose game', () => {
      const firstOption = wrapper.findAll('option').at(0)
      firstOption.trigger('input')
      wrapper.emitted().input.should.exist
    })
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
    wrapper.emitted().input[0][0].should.be.equal(games[1].id.toString())
  })
})
