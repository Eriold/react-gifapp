import React from 'react'
import GifExpertApp from '../GifExpertApp'
import { shallow } from 'enzyme'

describe('render <GifExpertApp />', () => {
  test('show <GifExpertApp /> ', () => {
    const wrapper = shallow(<GifExpertApp />);
    expect(wrapper).toMatchSnapshot();
  })

  test('show cant list category', () => {
    const categories = ['One Punch', 'Overlord'];
    const wrapper = shallow(<GifExpertApp defaultCategories={categories} />);
    expect(wrapper).toMatchSnapshot()
    expect(wrapper.find('GifGrid').length).toBe(categories.length)
  })

}) 