import { type DataGenerator } from '../data-generator';
import { makeGetGender } from './gender';
import { makeGetFirstname } from './firstname';
import { makeGetLastname } from './lastname';

export const makeGetPerson: DataGenerator<[], Person> = ({ random, data }) => {
  const getGender = makeGetGender({ random, data });
  const getFirstname = makeGetFirstname({ random, data });
  const getLastname = makeGetLastname({ random, data });

  return () => {
    const gender = getGender();
  
    const firstname = getFirstname({ gender: gender.value });
    const lastname = getLastname();
  
    return new Person({
      gender,
      firstname,
      lastname,
    });
  };
};

class Person {

  gender: any
  firstname: string
  lastname: string

  constructor({ gender, firstname, lastname }) {
    this.gender = gender;
    this.firstname = firstname;
    this.lastname = lastname;
  }

  get fullName() {
    return `${this.gender.shortCivility} ${this.firstname} ${this.lastname}`;
  }
}
