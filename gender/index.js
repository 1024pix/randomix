import { getLocaleFromParams } from '../../js/i18n/utils';
import { getInteger } from '../integer';

export async function getGender() {
  const locale = getLocaleFromParams();

  const res = await import(`./${locale}/data.json`);
  const data = res.default;

  return new Gender(data[getInteger(data.length)]);
}

class Gender {
  constructor({ value, shortCivility, civility }) {
    this.value = value;
    this.shortCivility = shortCivility;
    this.civility = civility;
  }
}
