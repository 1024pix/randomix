import { type DataGenerator } from '../data-generator';

export const makeGetInteger: DataGenerator<[number], number> = ({ random }) => (max) => {
  return random() % max;
};
