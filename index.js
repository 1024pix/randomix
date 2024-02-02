import { getInteger } from './integer.js';
import { getPerson } from './person.js';

import { makeRandom } from './make-random.js';

class Randomix {
  #random;

  constructor({ random = makeRandom(seed), seed }) {
    this.#random = random;
  }

  getInteger(max) {
    return getInteger({ random: this.#random, max });
  }

  getPerson() {
    return getPerson({ random: this.#random });
  }
}

export { Randomix };