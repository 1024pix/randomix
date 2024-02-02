import { getInteger } from '../integer';
import * as data from './fr/data.json' assert { type: 'json' };

export async function getFirstname({ random, gender }) {
  if (gender) {
    data = data.filter((firstname) => firstname.gender.includes(gender));
  }

  return data[getInteger({ random, max: data.length })].value;
}
