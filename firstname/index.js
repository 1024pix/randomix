import { getInteger } from '../integer';

export async function getFirstname({ random, data, gender }) {
  if (gender) {
    data = data.filter((firstname) => firstname.gender.includes(gender));
  }

  return data[getInteger({ random, max: data.length })].value;
}
