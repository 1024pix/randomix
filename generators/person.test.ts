import {expect, describe, it} from 'vitest'
import {makeGetPerson} from './person'

describe('Person Generator', () => {
  it('should return person', () => {
    const gender = [
      {
        "value": "M",
        "shortCivility": "M.",
        "civility": "Monsieur"
      },
      {
        "value": "F",
        "shortCivility": "Mme",
        "civility": "Madame"
      }
    ]
    const firstnames = [
      {
        "value": "Nicolas",
        "gender": [
          "M"
        ]
      },
      {
        "value": "Laura",
        "gender": [
          "F"
        ]
      }
    ]
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
    const getPerson = makeGetPerson({random: () => 1, data: { gender, lastnames, firstnames }})

    const result = getPerson()

    expect(result.fullName).toEqual('Mme Laura Bar')
  })
})