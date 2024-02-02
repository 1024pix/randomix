import {expect, describe, it} from 'vitest'
import {makeGetLastname} from './lastname'

describe('Lastname Generator', () => {
  it('should return lastname', () => {
    const lastname = [
      {
        "value": "Foo"
      },
      {
        "value": "Bar"
      },
      {
        "value": "Baz"
      }
    ]
    const getLastname = makeGetLastname({random: () => 1, data: {lastname}})

    const result = getLastname()

    expect(result).toEqual('Bar')
  })
})