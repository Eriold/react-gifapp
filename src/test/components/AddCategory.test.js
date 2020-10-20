import React from 'react'
const { shallow } = require('enzyme')
const { AddCategory } = require('../../Components/AddCategory')
import '@testing-library/jest-dom'

describe('test component <AddCategory />', () => {

  const setCategories = jest.fn();
  let wrapper = shallow(<AddCategory setCategories={setCategories} />)
  const value = 'Hello World'

  beforeEach(() => {
    jest.clearAllMocks();
    wrapper = shallow(<AddCategory setCategories={setCategories} />)
  })

  test('show component', () => {
    expect(wrapper).toMatchSnapshot();
  })

  test('change input ', () => {
    const input = wrapper.find('input');
    input.simulate('change', { target: { value } });
    const inputValueText = wrapper.find('p').text().trim();
    expect(inputValueText).toBe(value)
  })

  test('do not send submit null', () => {
    wrapper.find('form').simulate('submit', { preventDefault() { } });
    expect(setCategories).not.toHaveBeenCalled();
  })

  test('call setCategories and clean input ', () => {
    wrapper.find('input').simulate('change', { target: { value } });
    wrapper.find('form').simulate('submit', { preventDefault() { } });
    expect(setCategories).toHaveBeenCalled();
    expect(setCategories).toHaveBeenCalledTimes(1);
    expect(setCategories).toHaveBeenCalledWith(expect.any(Function));
    expect(wrapper.find('input').prop('value')).toBe('')
  })

})