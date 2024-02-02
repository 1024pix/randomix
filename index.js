import { getInteger } from './integer.js';
import { getPerson } from './person.js';

import { makeRandom } from './make-random.js';

class Randomix {
  static #data;
  #random;

  constructor({ random = makeRandom(seed), seed }) {
    this.#random = random;
  }

  getInteger(max) {
    return getInteger({ random: this.#random, max });
  }

  getPerson() {
    return getPerson({ random: this.#random, data: this.#data });
  }

  static setData(data) {
    this.#data = data;
  }
}

export { Randomix };