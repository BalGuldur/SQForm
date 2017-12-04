// TODO: Добавить тест на multiselect
import { shallow } from 'vue-test-utils'
import MyBaseSelect from '@/components/base_elements/MyBaseSelect'
const items1 = {1: {id: 1, title: 'test1'}, 2: {id: 2, title: 'test2'}}
const items2 = [{id: 1, title: 'test1'}, {id: 2, title: 'test2'}]
const items3 = ['1', '2']
const items4 = [1, 2]
const items5 = {1: {myId: 1, name: 'test1'}, 2: {myId: 2, name: 'test2'}}

describe('MyBaseSelect.vue', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(MyBaseSelect, {
      propsData: {
        items: items1,
        value: ''
      }
    })
  })

  describe('from Objects', () => {
    it('should render have one select', () => {
      wrapper.find('select').should.exist
      wrapper.findAll('select').length.should.be.equal(1)
    })
    it('should render have right qty option from Objects', () => {
      wrapper.find('option').should.exist
      wrapper.findAll('option').length
        .should.be.equal(Object.keys(items1).length)
    })
    it('should render right id value from Objects', () => {
      const firstOption = wrapper.findAll('option').at(0)
      firstOption.text().should.be.equal(items1[1].title.toString())
      firstOption.element.value.should.be.equal(items1[1].id.toString())
    })
    it('should emit rigth value', () => {
      wrapper.findAll('option').at(0).trigger('input')
      wrapper.emitted().input.should.exist
      wrapper.emitted().input[0][0].should.be.equal(items1[1].id.toString())
    })
  })

  describe('from Array', () => {
    beforeEach(() => {
      wrapper.setProps({items: items2})
    })

    it('should render have one select', () => {
      wrapper.find('select').should.exist
      wrapper.findAll('select').length.should.be.equal(1)
    })
    it('should render have right qty option from Array', () => {
      wrapper.find('option').should.exist
      wrapper.findAll('option').length
        .should.be.equal(Object.keys(items2).length)
    })
    it('should render right id value from Array', () => {
      const firstOption = wrapper.findAll('option').at(0)
      firstOption.text().should.be.equal(items2[0].title.toString())
      firstOption.element.value.should.be.equal(items2[0].id.toString())
    })
    it('should emit rigth value', () => {
      wrapper.findAll('option').at(0).trigger('input')
      wrapper.emitted().input.should.exist
      wrapper.emitted().input[0][0].should.be.equal(items2[0].id.toString())
    })
  })

  describe('from Array of simple strings', () => {
    beforeEach(() => {
      wrapper.setProps({items: items3})
    })

    it('should render have one select', () => {
      wrapper.find('select').should.exist
      wrapper.findAll('select').length.should.be.equal(1)
    })
    it('should render have right qty option', () => {
      wrapper.find('option').should.exist
      wrapper.findAll('option').length
        .should.be.equal(Object.keys(items3).length)
    })
    it('should render right id value', () => {
      const firstOption = wrapper.findAll('option').at(0)
      firstOption.text().should.be.equal(items3[0].toString())
      firstOption.element.value.should.be.equal(items3[0].toString())
    })
    it('should emit rigth value', () => {
      wrapper.findAll('option').at(0).trigger('input')
      wrapper.emitted().input.should.exist
      wrapper.emitted().input[0][0].should.be.equal(items3[0].toString())
    })
  })

  describe('from Array of simple numbers', () => {
    beforeEach(() => {
      wrapper.setProps({items: items4})
    })

    it('should render have one select', () => {
      wrapper.find('select').should.exist
      wrapper.findAll('select').length.should.be.equal(1)
    })
    it('should render have right qty option', () => {
      wrapper.find('option').should.exist
      wrapper.findAll('option').length
        .should.be.equal(Object.keys(items4).length)
    })
    it('should render right id value', () => {
      const firstOption = wrapper.findAll('option').at(0)
      firstOption.text().should.be.equal(items4[0].toString())
      firstOption.element.value.should.be.equal(items4[0].toString())
    })
    it('should emit rigth value', () => {
      wrapper.findAll('option').at(0).trigger('input')
      wrapper.emitted().input.should.exist
      wrapper.emitted().input[0][0].should.be.equal(items4[0].toString())
    })
  })

  describe('from Object with options', () => {
    beforeEach(() => {
      wrapper.setProps({
        items: items5,
        fieldOptionValue: 'myId',
        fieldOptionTitle: 'name'
      })
    })
    it('should render right id value from Objects', () => {
      const firstOption = wrapper.findAll('option').at(0)
      firstOption.text().should.be.equal(items5[1].name.toString())
      firstOption.element.value.should.be.equal(items5[1].myId.toString())
    })
    it('should emit rigth value', () => {
      wrapper.findAll('option').at(0).trigger('input')
      wrapper.emitted().input.should.exist
      wrapper.emitted().input[0][0].should.be.equal(items5[1].myId.toString())
    })
  })
})
