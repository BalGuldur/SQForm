import { mount, createLocalVue } from 'vue-test-utils'
import Vuex from 'vuex'
import GamesWithRules from '@/components/GamesWithRules'

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

describe('GamesWithRules', () => {
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

  it('should render right content', () => {
    const wrapper = mount(GamesWithRules, {
      store,
      localVue,
      propsData: {
        value: ''
      }
    })
    expect(wrapper.find('.toggleCreateRule').element).to.exist
    expect(wrapper.find('.gameWithRules').element).to.exist
    expect(wrapper.findAll('.gameWithRules')).to.have.lengthOf(Object.keys(games).length)
    expect(wrapper.find('.ruleForm').element).to.not.exist
  })

  it('should open create Rule From on click on toggleCreateRule', () => {
    const wrapper = mount(GamesWithRules, {
      store,
      localVue,
      propsData: {
        value: ''
      }
    })
    expect(wrapper.findAll('.ruleForm').length).to.be.equal(0)
    wrapper.find('.toggleCreateRule').trigger('click')
    expect(wrapper.findAll('.ruleForm').length).to.be.above(0)
  })
})
