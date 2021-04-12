import { mount } from '@vue/test-utils';
import Home from '../../src/views/Home.vue';


describe('Mounted App', () => {
  const wrapper = mount(Home);
 it('renders the Add Form Button', () => {
    expect(wrapper.html()).toContain('Add Form')
  })

  it('renders the Edit Form Button', () => {
    expect(wrapper.html()).toContain('Edit Form')
  })
})
