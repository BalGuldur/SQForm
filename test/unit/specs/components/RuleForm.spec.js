import { shallow } from 'vue-test-utils'
import RuleForm from '@/components/RuleForm'

describe('RuleForm.vue', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(RuleForm, {
      stubs: {
        GameSelect: '<div class="gameSelect"></div>',
        TagRuleSelect: '<div class="tagRuleSelect"></div>',
        CoefficientTimeRangeSelect: '<div class="coefficientTimeRangeSelect"></div>'
      },
      propsData: {
        value: true
      }
    })
  })
  // TODO: Добавить проверку методов, computed и изменения данных

  describe('render', () => {
    it('should have game select', () => {
      wrapper.contains('.gameSelect').should.be.ok
    })
    it('should have tag rule select', () => {
      wrapper.contains('.tagRuleSelect').should.be.ok
    })
    it('should have coeffToRuleTimeRange', () => {
      wrapper.contains('.coefficientTimeRangeSelect').should.be.ok
    })
    it('should have add coeffToRuleTimeRange button', () => {
      wrapper.contains('.addCoeffTimeRange').should.be.ok
    })
    it('should one coeffToRuleTimeRange on initial state', () => {
      wrapper.findAll('.coefficientTimeRangeSelect').length
        .should.be.equal(1)
    })
    it('should add one coeffToRuleTimeRange on click add', () => {
      wrapper.find('.addCoeffTimeRange').trigger('click')
      wrapper.findAll('.coefficientTimeRangeSelect').length
        .should.be.equal(2)
    })
    it('should open on change value to true', () => {
      wrapper.contains('.ruleForm').should.be.ok
    })

    it('should close on change value to false', () => {
      wrapper.setProps({ value: false })
      wrapper.contains('.ruleFrom').should.not.be.ok
    })
  })
})
