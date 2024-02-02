import { getLocaleFromParams } from '../../js/i18n/utils';
import { getInteger } from '../integer';

export async function getLastname({ random }) {
  const locale = getLocaleFromParams();

  const res = await import(`./${locale}/data.json`);
  const data = res.default;

  return data[getInteger({ random, max: data.length })].value;
}
