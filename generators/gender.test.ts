import { expect, describe, it } from 'vitest'
import { makeGetGender, Gender } from './gender'

describe('Gender Generator', () => {
  it('should return gender', () => {
    const gender = [
      { value: 'foo', shortCivility: 'foo', civility: 'foo' },
      { value: 'bar', shortCivility: 'bar', civility: 'bar' },
      { value: 'baz', shortCivility: 'baz', civility: 'baz' },
    ]
    // 1 % 3 = 1
    const getGender = makeGetGender({ random: () => 1, data: { gender } })

    const result = getGender()

    expect(result).toEqual(new Gender({ value: 'bar', shortCivility: 'bar', civility: 'bar' }))
  })
})