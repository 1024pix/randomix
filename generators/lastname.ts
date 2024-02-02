import { type DataGenerator } from '../data-generator';

export const makeGetLastname: DataGenerator<[], string> = ({ data, random }) => () => {
  return data.lastnames[random() % data.lastnames.length].value;
};
