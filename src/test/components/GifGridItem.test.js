import { shallow } from 'enzyme'
import React from 'react'
import '@testing-library/jest-dom'
import { GifGridItem } from '../../Components/GifGridItem'

describe('render <GifGridItem />', () => {

  const title = 'A title'
  const url = 'https://localhost/algo.jpg'

  const wrapper = shallow(
    <GifGridItem
      title={title}
      url={url}
    />)

  test('show <GifGridItem /> correctly', () => {
    expect(wrapper).toMatchSnapshot();
  })

  test('evaluate <p> with title', () => {
    const showTitleText = wrapper.find('p').text().trim();
    expect(showTitleText).toBe(title)
  })

  test('evaluate <img> with url and title', () => {
    const img = wrapper.find('img');
    // console.log(img.props('src'))
    expect(img.prop('src')).toBe(url)
    expect(img.prop('alt')).toBe(title)
  })

  test('cant to have animate_fadeIn in className ', () => {
    const div = wrapper.find('div');
    // console.log(div.prop('className'));
    const classNameDiv = div.prop('className')
    expect(classNameDiv.includes('animate__bounce')).toBe(true)
  })

})