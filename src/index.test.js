import { useMarked } from './'
import { renderHook } from "@testing-library/react-hooks"

describe('useMarked', () => {
  it('Receives markdown and returns html', async () => {
    const { result } = renderHook(() => useMarked('# test'))
    expect(result.current).toBe('<h1>test</h1>\n')
  })
})
