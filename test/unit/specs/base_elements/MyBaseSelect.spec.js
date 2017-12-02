import { shallow } from 'vue-test-utils'
import MyBaseSelect from '@/components/base_elements/MyBaseSelect'
const items1 = {1: {id: 1, title: 'test1'}, 2: {id: 2, title: 'test2'}}
const items2 = [{id: 1, title: 'test1'}, {id: 2, title: 'test2'}]
const items3 = ['1', '2']
const items4 = [1, 2]
const items5 = {1: {myId: 1, name: 'test1'}, 2: {myId: 2, name: 'test2'}}

describe('MyBaseSelect.vue', () => {
  it('should render option from Object', () => {
    const wrapper = shallow(MyBaseSelect, {
      propsData: {
        items: items1,
        value: ''
      }
    })
    expect(wrapper.find('select')).to.exist
    expect(wrapper.findAll('option')).to.exist
    const firstOption = wrapper.findAll('option').at(0)
    expect(firstOption.text()).to.equal(items1[1].title.toString())
    expect(firstOption.element.value).to.equal(items1[1].id.toString())
  })

  it('should render option from Object with options', () => {
    const wrapper = shallow(MyBaseSelect, {
      propsData: {
        items: items5,
        value: '',
        fieldOptionValue: 'myId',
        fieldOptionTitle: 'name'
      }
    })
    expect(wrapper.find('select')).to.exist
    expect(wrapper.findAll('option')).to.exist
    const firstOption = wrapper.findAll('option').at(0)
    expect(firstOption.text()).to.equal(items5[1].name.toString())
    expect(firstOption.element.value).to.equal(items5[1].myId.toString())
  })

  it('should render option from Array', () => {
    const wrapper = shallow(MyBaseSelect, {
      propsData: {
        items: items2,
        value: ''
      }
    })
    expect(wrapper.find('select')).to.exist
    expect(wrapper.findAll('option')).to.exist
    const firstOption = wrapper.findAll('option').at(0)
    expect(firstOption.text()).to.equal(items2[0].title.toString())
    expect(firstOption.element.value).to.equal(items2[0].id.toString())
  })

  it('should render option from Array of simple string', () => {
    const wrapper = shallow(MyBaseSelect, {
      propsData: {
        items: items3,
        value: ''
      }
    })
    expect(wrapper.find('select')).to.exist
    expect(wrapper.findAll('option')).to.exist
    const firstOption = wrapper.findAll('option').at(0)
    expect(firstOption.text()).to.equal(items3[0].toString())
    expect(firstOption.element.value).to.equal(items3[0])
  })

  it('should render option from Array of simple number', () => {
    const wrapper = shallow(MyBaseSelect, {
      propsData: {
        items: items4,
        value: ''
      }
    })
    expect(wrapper.find('select')).to.exist
    expect(wrapper.findAll('option')).to.exist
    const firstOption = wrapper.findAll('option').at(0)
    expect(firstOption.text()).to.equal(items4[0].toString())
    expect(firstOption.element.value).to.equal(items4[0].toString())
  })

  it('should emit new right value on change option from Object', () => {
    const wrapper = shallow(MyBaseSelect, {
      propsData: {
        items: items1,
        value: ''
      }
    })
    wrapper.findAll('option').at(0).trigger('input')
    expect(wrapper.emitted().input).to.exist
    expect(wrapper.emitted().input[0][0]).to.equal(items1[1].id.toString())
  })

  it('should emit new right value on change option from Object with options', () => {
    const wrapper = shallow(MyBaseSelect, {
      propsData: {
        items: items5,
        value: '',
        fieldOptionValue: 'myId',
        fieldOptionTitle: 'name'
      }
    })
    wrapper.findAll('option').at(0).trigger('input')
    expect(wrapper.emitted().input).to.exist
    expect(wrapper.emitted().input[0][0]).to.equal(items5[1].myId.toString())
  })

  it('should emit new right value on change option from simple string', () => {
    const wrapper = shallow(MyBaseSelect, {
      propsData: {
        items: items3,
        value: ''
      }
    })
    wrapper.findAll('option').at(0).trigger('input')
    expect(wrapper.emitted().input).to.exist
    expect(wrapper.emitted().input[0][0]).to.equal(items3[0])
  })
})
