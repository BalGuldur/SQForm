import { shallow, createLocalVue } from 'vue-test-utils'
import Vuex from 'vuex'
import GameWithRules from '@/components/GameWithRules'
import { games, rules } from '@/stubs'

const game = games[1]
const localVue = createLocalVue()

localVue.use(Vuex)

describe('GameWithRules.vue', () => {
  let getters
  let store
  let wrapper

  beforeEach(() => {
    getters = {
      'rules/data': () => rules
    }

    store = new Vuex.Store({
      getters
    })

    wrapper = shallow(GameWithRules, {
      store,
      localVue,
      stubs: {
        GameRule: '<div class="gameRule"></div>'
      },
      propsData: {
        game
      }
    })
  })

  it('should render right initial content', () => {
    expect(wrapper.find('.toggleRules').element).to.exist
    expect(wrapper.findAll('.gameRule').length).to.equal(0)
  })

  it('should render right count rules', () => {
    wrapper.find('.toggleRules').trigger('click')
    expect(wrapper.findAll('.gameRule').length).to.equal(2)
  })

  it('should change element toggleRule on toggle', () => {
    expect(wrapper.contains('.openRulesTitle')).to.be.ok
    expect(wrapper.contains('.closeRulesTitle')).to.not.be.ok
    wrapper.find('.toggleRules').trigger('click')
    expect(wrapper.contains('.openRulesTitle')).to.not.be.ok
    expect(wrapper.contains('.closeRulesTitle')).to.be.ok
  })
})
