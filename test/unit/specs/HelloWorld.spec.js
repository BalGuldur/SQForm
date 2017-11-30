// import Vue from 'vue'
import { shallow } from 'vue-test-utils'
import HelloWorld from '@/components/HelloWorld'

describe('HelloWorld.vue', () => {
  it('should render correct contents', () => {
    // const Constructor = Vue.extend(HelloWorld)
    // const vm = new Constructor().$mount()
    const wrapper = shallow(HelloWorld)
    // expect(vm.$el.querySelector('.hello h1').textContent)
    // .to.equal('Welcome to Your Vue.js App')
    expect(wrapper.find('.hello h1').text())
      .to.equal('Welcome to Your Vue.js App')
  })

  it('button must trigger msg', () => {
    const wrapper = shallow(HelloWorld)
    wrapper.find('#testbtn').trigger('click')

    expect(wrapper.find('.hello h1').text())
      .to.equal('test')
  })
})
