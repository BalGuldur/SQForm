import { shallow } from 'vue-test-utils'
import TagRuleSelect from '@/components/base_elements/TagRuleSelect'

const tagName = 'geo'

describe('TagRuleSelect.vue', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(TagRuleSelect, {
      stubs: {
        MyBaseSelect: '<div class="tagValuesSelect"></div>'
      },
      propsData: {
        title: tagName,
        condition: '=',
        items: ['RU', 'EU', 'AU'],
        value: { condition: '=', values: [] }
      }
    })
  })

  describe('render', () => {
    it('should have tag title', () => {
      wrapper.find('.tagTitle').element
        .should.exist
    })
    it('should have tag condition', () => {
      wrapper.find('.tagCondition').element
        .should.exist
    })
    it('should have tag values select', () => {
      wrapper.find('.tagValuesSelect').element
        .should.exist
    })
  })

  describe('events', () => {
    it('should emit new object on toggle condition', () => {
      wrapper.find('.tagCondition').trigger('click')
      wrapper.emitted().input.should.exist
      const newCondition = wrapper.emitted().input[0][0].condition
      const newValues = wrapper.emitted().input[0][0].values
      newCondition.should.be.equal('!=')
      newValues.should.be.empty
    })

    it('should emit new object on select value', () => {
    })
  })
})
