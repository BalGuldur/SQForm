import { shallow } from 'vue-test-utils'
import TagRule from '@/components/base_elements/TagRule'
import { rules } from '@/stubs'

const rule = rules[1]
const tagName = 'geo'

describe('TagRule.vue', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(TagRule, {
      propsData: {
        title: tagName,
        condition: rule[tagName].condition,
        values: rule[tagName].values
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
    it('should have tag values', () => {
      wrapper.findAll('.tagValue').length
        .should.above(0)
    })
    it('should hav right count values', () => {
      wrapper.findAll('.tagValue').length
        .should.equal(rule[tagName].values.length)
    })
  })
})
