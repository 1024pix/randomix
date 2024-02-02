
import { getGender } from './gender';
import { getLastname } from './lastname';
import { getFirstname } from './firstname';

export async function getPerson() {
  const gender = await getGender();

  const [firstname, lastname] = await Promise.all([
    getFirstname({ gender: gender.value }),
    getLastname()
  ]);

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
