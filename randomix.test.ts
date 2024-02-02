import { expect, describe, it } from 'vitest'
import { Randomix } from './randomix'

describe('Randomix', () => {
  it('should expose generators', () => {
    const randomix = new Randomix({
      generators: {
        foo: () => () => 'foo',
        bar: () => () => 'bar',
      },
      data: {
        en: {},
        fr: {},
      },
    })

    const generator = randomix.getGenerator({ locale: 'en', seed: 42 })

    expect(generator.foo()).toBe('foo')
    expect(generator.bar()).toBe('bar')
  })

  it('should inject data into generators', () => {
    const randomix = new Randomix({
      generators: {
        foo: ({ data }) => () => data.foo,
      },
      data: {
        en: { foo: 'foo' },
        fr: { foo: 'bar' },
      },
    })

    const generator = randomix.getGenerator({ locale: 'en', seed: 42 })
    const frGenerator = randomix.getGenerator({ locale: 'fr', seed: 42 })

    expect(generator.foo()).toBe('foo')
    expect(frGenerator.foo()).toBe('bar')
  })
})