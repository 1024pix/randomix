import { type DataGenerator } from '../data-generator';

export const makeGetLastname: DataGenerator<[], string> = ({ data, random }) => () => {
  return data.lastname[random() % data.lastname.length].value;
};
