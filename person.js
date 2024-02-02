import { getGender } from './gender';
import { getLastname } from './lastname';
import { getFirstname } from './firstname';

export function getPerson({ random, data }) {
  const gender = getGender({ random });

  const firstname = getFirstname({ random, data, gender });
  const lastname = getLastname({ random, data });

  return new Person({
    gender,
    firstname,
    lastname,
  });
}

class Person {
  constructor({ gender, firstname, lastname }) {
    this.gender = gender;
    this.firstname = firstname;
    this.lastname = lastname;
  }

  get fullName() {
    return `${this.gender.shortCivility} ${this.firstname} ${this.lastname}`;
  }
}
