import { getInteger } from '../integer';
import * as data from './fr/data.json' assert { type: 'json' };

export function getGender({ random }){
  return new Gender(data[getInteger({ random, max: data.length })]);
}

class Gender {
  constructor({ value, shortCivility, civility }) {
    this.value = value;
    this.shortCivility = shortCivility;
    this.civility = civility;
  }
}
