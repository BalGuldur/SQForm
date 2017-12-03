import { shallow } from 'vue-test-utils'
import RuleForm from '@/components/RuleForm'

describe('RuleForm.vue', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(RuleForm, {
      stubs: {
        GameSelect: '<div class="gameSelect"></div>',
        TagRuleSelect: '<div class="tagRuleSelect"></div>',
        CoeffToRuleTimeRangeSelect: '<div class="coeffToRuleTimeRangeSelect"></div>'
      },
      propsData: {
        value: true
      }
    })
  })

  describe('render', () => {
    it('should have game select', () => {
      expect(wrapper.find('.gameSelect').element).to.exist
    })

    it('should have tag rule select', () => {
      expect(wrapper.find('.tagRuleSelect').element).to.exist
    })

    it('should have coeffToRuleTimeRange', () => {
      expect(wrapper.find('.coeffToRuleTimeRangeSelect').element).to.exist
    })

    it('should have add coeffToRuleTimeRange button', () => {
      expect(wrapper.find('.addCoeffToRuleTimeRange').element).to.exist
    })

    it('should one coeffToRuleTimeRange on initial state', () => {
      wrapper.findAll('.coeffToRuleTimeRangeSelect').length
        .should.be.equal(1)
    })

    it('should add one coeffToRuleTimeRange on click add', () => {
      wrapper.find('.addCoeffToRuleTimeRange').trigger('click')
      wrapper.findAll('.coeffToRuleTimeRangeSelect').length
        .should.be.equal(2)
    })
    // it('should open on change value to true', () => {
    //   wrapper.setProps({ value: true })
    //   expect(wrapper.vm.isOpen).to.be.equal(true)
    //   wrapper.update()
    //   expect(wrapper.find('.ruleForm').element).to.exist
    // })

    // it('should close on change value to false', () => {
    //   wrapper.setProps({ value: false })
    //   expect(wrapper.find('.ruleFrom').element).to.not.exist
    // })
  })
})
