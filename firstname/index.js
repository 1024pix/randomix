import { getLocaleFromParams } from '../../js/i18n/utils';
import { getInteger } from '../integer';

export async function getFirstname({ gender } = {}) {
  const locale = getLocaleFromParams();

  const res = await import(`./${locale}/data.json`);
  let data = res.default;

  if (gender) {
    data = data.filter((firstname) => firstname.gender.includes(gender));
  }

  return data[getInteger(data.length)].value;
}
