import React from 'react'
import { shallow } from 'enzyme'
import { GifGrid } from '../../Components/GifGrid'
import { useFetchGifs } from '../../hooks/useFetchifs';

jest.mock('../../hooks/useFetchifs')


describe('render <GifGrid />', () => {
  const category = 'Death Note';

  test('show component ', () => {
    useFetchGifs.mockReturnValue({
      data: [],
      loading: true
    })

    const wrapper = shallow(<GifGrid category={category} />)
    expect(wrapper).toMatchSnapshot();
  })

  test('show items when load images useFetchGifs', () => {

    const gifs = [{
      id: 'ABC',
      url: 'https://localhost/any/any.jpg',
      title: 'test gif'
    }]

    useFetchGifs.mockReturnValue({
      data: gifs,
      loading: false
    });

    const wrapper = shallow(<GifGrid category={category} />);

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('p').exists()).toBe(false);
    expect(wrapper.find('GifGridItem').length).toBe(gifs.length)
  })


})