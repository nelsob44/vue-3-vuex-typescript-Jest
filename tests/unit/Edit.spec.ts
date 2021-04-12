import { mount } from '@vue/test-utils';
import Edit from '../../src/views/Edit.vue';


describe('Edit User Data page', () => {
  const wrapper = mount(Edit);
 it('renders the Add Reset Password Button', () => {
    expect(wrapper.html()).toContain('Reset Password')
  })

  it('renders the Save All Button', () => {
    expect(wrapper.html()).toContain('Save All')
  })

  it('renders the User Details heading', () => {
    expect(wrapper.html()).toContain('User Details')
  })

  it('renders the Settings heading', () => {
    expect(wrapper.html()).toContain('Settings')
  })

  it('renders the name Austin Fisher', () => {
    expect(wrapper.html()).toContain('Austin Fisher')
  })
  it('renders the label First Name', () => {
    expect(wrapper.html()).toContain('First Name')
  })
  it('renders the label Last Name', () => {
    expect(wrapper.html()).toContain('Last Name')
  })
  it('renders the label Username', () => {
    expect(wrapper.html()).toContain('Username')
  })
  it('renders the label Default Email', () => {
    expect(wrapper.html()).toContain('Default Email')
  })
  it('renders the label Title', () => {
    expect(wrapper.html()).toContain('Title')
  })
  it('renders the label Designation', () => {
    expect(wrapper.html()).toContain('Designation')
  })
  it('renders the label Default Interface', () => {
    expect(wrapper.html()).toContain('Default Interface')
  })
  it('renders the label Preferred Language', () => {
    expect(wrapper.html()).toContain('Preferred Language')
  })
  it('renders the label Account Locked', () => {
    expect(wrapper.html()).toContain('Account Locked')
  })
  it('renders the label User must change password at next login', () => {
    expect(wrapper.html()).toContain('User must change password at next login')
  })
  it('renders the label Passwords never expire', () => {
    expect(wrapper.html()).toContain('Passwords never expire')
  })
  it('renders the label Super User', () => {
    expect(wrapper.html()).toContain('Super User')
  })
  it('renders the user firstname "Austin"', () => {
    expect(wrapper.html()).toContain('Austin')
  })
  it('renders the user lastname "Fisher"', () => {
    expect(wrapper.html()).toContain('Fisher')
  })
})
