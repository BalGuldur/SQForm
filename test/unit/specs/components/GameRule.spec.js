import { shallow, createLocalVue } from 'vue-test-utils'
import Vuex from 'vuex'
import GameRule from '@/components/GameRule'
import { rules, coefficientTimeRanges } from '@/stubs'

const rule = rules[1]
const localVue = createLocalVue()

localVue.use(Vuex)

describe('GameRule.vue', () => {
  let getters
  let store
  let wrapper

  beforeEach(() => {
    getters = {
      'coefficientTimeRanges/data': () => coefficientTimeRanges
    }

    store = new Vuex.Store({
      getters
    })

    wrapper = shallow(GameRule, {
      store,
      localVue,
      stubs: {
        TagRule: '<div class="tagRule"></div>',
        CoefficientTimeRange: '<div class="coeffTimeRange"></div>'
      },
      propsData: {
        rule
      }
    })
  })
  // TODO: Добавить тест computed параметров

  describe('render', () => {
    it('should have tag rule', () => {
      wrapper.find('.tagRule').element.should.exist
    })
    it('should have right qty tag rule', () => {
      wrapper.findAll('.tagRule').length.should.be.equal(3)
    })
    it('should have coefficient Time Range', () => {
      wrapper.find('.coeffTimeRange').element.should.exist
    })
    it('should have right qty Time Range', () => {
      const coeffTimeRangesLength = rule.coefficient_time_range_ids
        .map(itemId => coefficientTimeRanges[itemId]).length
      wrapper.findAll('.coeffTimeRange').length
        .should.be.equal(coeffTimeRangesLength)
    })
  })
})
