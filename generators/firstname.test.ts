import {expect, describe, it} from 'vitest'
import { makeGetFirstname } from './firstname'

describe('Firstname Generator', () => {
  it('should return gender', () => {
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
    // 1 % 3 = 1
    const getFirstname = makeGetFirstname({ random: () => 1, data: { gender, firstnames }})

    const result = getFirstname({ gender: 'M' })

    expect(result).toEqual('Nicolas')
  })
})