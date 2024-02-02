import { type DataGenerator } from '../data-generator';

export const makeGetFirstname: DataGenerator<[{ gender: string }], string> = ({ data, random }) => ({ gender }) => {
  const firstnames = gender
    ? data.firstnames.filter((firstname: any) => firstname.gender.includes(gender))
    : data.firstnames;

  return firstnames[random() % firstnames.length].value;
}
