import { expect, describe, it } from 'vitest'
import { makeGetInteger } from './integer'

describe('Integer Generator', () => {
  it('should return integer', () => {
    const getInteger = makeGetInteger({ random: () => 1, data: {} })

    const result = getInteger(3)

    expect(result).toEqual(1)
  })
})