const { getGifs } = require("../../helpers/getGifs");

describe('the function helpert getGifs Fetch', () => {
  test('gets can 10 elements ', async () => {
    const gifs = await getGifs('One Punch')
    expect(gifs.length).toBe(10)
  })

  test('gets can 10 elements ', async () => {
    const gifs = await getGifs('')
    expect(gifs.length).toBe(0)
  })

})