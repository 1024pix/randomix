import { getInteger } from '../integer';

export async function getLastname({ random, data }) {
  return data[getInteger({ random, max: data.length })].value;
}
