import { shallow, createLocalVue } from 'vue-test-utils'
import Vuex from 'vuex'
import GamesWithRules from '@/components/GamesWithRules'
import { games } from '@/stubs'

const localVue = createLocalVue()

localVue.use(Vuex)

describe('GamesWithRules.vue', () => {
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

    wrapper = shallow(GamesWithRules, {
      store,
      localVue,
      stubs: {
        GameWithRules: '<div class="gameWithRules"></div>',
        RuleForm: '<div class="ruleForm"></div>'
      }
    })
  })

  describe('render', () => {
    it('should have toggle create rule form', () => {
      wrapper.find('.toggleCreateRule').element.should.exist
    })
    it('should have game with rules', () => {
      wrapper.find('.gameWithRules').element.should.exist
    })
    it('should have right qty game with rules', () => {
      wrapper.findAll('.gameWithRules').length
        .should.equal(Object.keys(games).length)
    })
    it('should have rule form', () => {
      wrapper.find('.ruleForm').element.should.exist
    })
  })

  describe('initial data', () => {
    it('should initial closed rule form', () => {
      wrapper.vm.ruleFormIsOpen.should.be.false
    })
  })

  describe('user interability', () => {
    it('should open create Rule From on click on toggleCreateRule', () => {
      wrapper.find('.toggleCreateRule').trigger('click')
      wrapper.vm.ruleFormIsOpen.should.be.true
    })
  })
  // TODO: Добавить тест вызовов beforeMount
})
