import { shallow, createLocalVue } from 'vue-test-utils'
import Vuex from 'vuex'
import CoeffToRuleTimeRangeSelect from '@/components/base_elements/CoeffToRuleTimeRangeSelect'
import { coefficientTables } from '@/stubs'

const localVue = createLocalVue()

localVue.use(Vuex)

describe('CoeffToRuleTimeRangeSelect.vue', () => {
  let wrapper
  let getters
  let store

  beforeEach(() => {
    getters = {
      'coefficientTables/data': () => coefficientTables
    }

    store = new Vuex.Store({
      getters
    })

    wrapper = shallow(CoeffToRuleTimeRangeSelect, {
      store,
      localVue,
      stubs: {
        MyBaseSelect: '<div class="coeffSelect"></div>',
        TimeRangeSelect: '<div class="timeRangeSelect"></div>'
      },
      propsData: {
        value: {
          id: 1,
          rule_id: 1,
          coefficient_table_id: 1,
          timeRange: 'stub'
        }
      }
    })
  })

  describe('render', () => {
    it('have coeff table select', () => {
      wrapper.find('.coeffSelect').element.should.exist
    })

    it('have time range select', () => {
      wrapper.find('.timeRangeSelect').element.should.exist
    })
  })
})
