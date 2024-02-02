import { type RandomFunction, type DataGenerator } from './data-generator';
import { makeRandom } from './make-random';

export class Randomix<Generators extends Record<string, DataGenerator> = Record<string, DataGenerator>> {

  #generators: Generators;
  #data: Record<string, any>;
  #randomFactory: (seed: number) => RandomFunction;

  constructor({
    generators,
    data,
    randomFactory = makeRandom,
  }: {
    generators: Generators
    data: Record<string, any>
    randomFactory?: (seed: number) => RandomFunction
  }) {
    this.#generators = generators;
    this.#data = data;
    this.#randomFactory = randomFactory;
  }

  getGenerator({ locale, seed }: { locale: string, seed: number }) {
    const random = this.#randomFactory(seed);
    const data = this.#data[locale];

    return Object.fromEntries(
      Object.entries(this.#generators)
        .map(([key, generator]) => [
          key,
          generator({ random, data }),
        ])
    ) as RandomixGenerator<Generators>;
  }
}

type RandomixGenerator<Generators extends Record<string, DataGenerator>> = {
  [Key in keyof Generators]: ReturnType<Generators[Key]>
}
