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
  // TODO: Добавить проверку computed парамтеров

  describe('render', () => {
    it('should render right initial content', () => {
      wrapper.find('.toggleRules').element.should.exist
      wrapper.findAll('.gameRule').length.should.be.equal(0)
    })

    it('should render right count rules', () => {
      wrapper.find('.toggleRules').trigger('click')
      wrapper.findAll('.gameRule').length.should.be.equal(2)
    })

    it('should change element toggleRule on toggle', () => {
      wrapper.contains('.openRulesTitle').should.be.ok
      wrapper.contains('.closeRulesTitle').should.not.be.ok
      wrapper.find('.toggleRules').trigger('click')
      wrapper.contains('.openRulesTitle').should.not.be.ok
      wrapper.contains('.closeRulesTitle').should.be.ok
    })
  })
})
