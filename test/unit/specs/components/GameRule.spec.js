import { shallow, createLocalVue } from 'vue-test-utils'
import Vuex from 'vuex'
import GameRule from '@/components/GameRule'
import { rules, ruleToCoefficientTimeRanges } from '@/stubs'

const rule = rules[1]
const localVue = createLocalVue()

localVue.use(Vuex)

describe('GameRule.vue', () => {
  let getters
  let store
  let wrapper

  beforeEach(() => {
    getters = {
      'ruleToCoefficientTimeRanges/data': () => ruleToCoefficientTimeRanges
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

  it('should render right content', () => {
    const ruleToCoeffLength = rule.rule_to_coefficient_time_range_ids
      .map(itemId => ruleToCoefficientTimeRanges[itemId]).length

    wrapper.findAll('.tagRule').length
      .should.be.equal(3)
    wrapper.findAll('.coeffTimeRange').length
      .should.be.equal(ruleToCoeffLength)
  })
})
