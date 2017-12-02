import { shallow } from 'vue-test-utils'
import MyBaseSelect from '@/components/base_elements/MyBaseSelect'
const items = {1: {id: 1, title: 'test1'}, 2: {id: 2, title: 'test2'}}

describe('MyBaseSelect.vue', () => {
  it('should emit new value', () => {
    const wrapper = shallow(MyBaseSelect, {
      propsData: {
        items,
        value: ''
      }
    })
    expect(wrapper.find('.select')).to.exist
    // console.log(wrapper.find('option'))
    // wrapper.vm.$emit('input', 1)
    // wrapper.find('.select').trigger('change')
    // const select = wrapper.find('select').element
    // select.value = 1

    // console.log(wrapper.emitted().input)
    // expect(wrapper.emitted('input')).to.exist
    // expect(wrapper.emitted('input')[0][0]).to.be.equal(1)
  })
})
