import {expect, describe, it} from 'vitest'
import {makeGetLastname} from './lastname'

describe('Lastname Generator', () => {
  it('should return lastname', () => {
    const lastnames = [
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
    const getLastname = makeGetLastname({random: () => 1, data: {lastnames}})

    const result = getLastname()

    expect(result).toEqual('Bar')
  })
})