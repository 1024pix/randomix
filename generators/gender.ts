import { type DataGenerator } from '../data-generator';

export const makeGetGender: DataGenerator<[], Gender> = ({ data, random }) => () => {
  return new Gender(data.gender[random() % data.gender.length]);
};

export class Gender {
  value: string
  shortCivility: string
  civility: string

  constructor({ value, shortCivility, civility }) {
    this.value = value;
    this.shortCivility = shortCivility;
    this.civility = civility;
  }
}
