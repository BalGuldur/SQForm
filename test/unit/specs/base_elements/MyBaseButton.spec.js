import { shallow } from 'vue-test-utils'
import MyBaseButton from '@/components/base_elements/MyBaseButton'

describe('MyBaseButton.vue', () => {
  it('should emit new value', () => {
    const wrapper = shallow(MyBaseButton)
    const button = wrapper.find('button')
    expect(button).to.exist
    button.trigger('click')
    expect(wrapper.emitted().click).to.exist
  })
})
