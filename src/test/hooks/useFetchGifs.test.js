import { renderHook } from "@testing-library/react-hooks";
import { useFetchGifs } from "../../hooks/useFetchifs";

describe('render hook useFetchGifs', () => {

  test('return inicial state', async () => {
    const { result, waitForNextUpdate } = renderHook(() => useFetchGifs('Overlord'))
    const { data, loading } = result.current;

    await waitForNextUpdate();
    // console.log(data, loading)
    expect(data).toEqual([]);
    expect(loading).toBe(true);
  })

  test('return array with images and loading false ', async () => {
    const { result, waitForNextUpdate } = renderHook(() => useFetchGifs('Overlord'))
    await waitForNextUpdate();

    const { data, loading } = result.current;

    expect(data.length).toBe(10);
    expect(loading).toBe(false);
  })

})