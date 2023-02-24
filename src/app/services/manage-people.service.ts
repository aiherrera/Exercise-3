import { Injectable } from '@angular/core';
import { Person } from '../models/Person';

@Injectable({
  providedIn: 'root',
})
export class ManagePeopleService {
  private peopleList: Person[] = [
    {
      id: 1,
      name: 'Alain',
      lastname: 'Iglesias',
      age: 36,
      location: 'latam',
    },
    {
      id: 2,
      name: 'Pepe',
      lastname: 'Gonzalez',
      age: 30,
      location: 'usa',
    },
    {
      id: 3,
      name: 'Maria',
      lastname: 'Perez',
      age: 28,
      location: 'europe',
    },
  ];

  constructor() {}

  insertPerson(person: Person) {
    const newID = this.peopleList.length + 1;
    person.id = newID;

    this.peopleList.push(person);
  }

  getPerson(personID: number) {
    return this.peopleList.find((person: Person) => person.id === personID);
  }

  getAllPeople() {
    return this.peopleList;
  }

  deletePerson(personID: number) {
    this.peopleList = this.peopleList.filter((person: Person) => {
      console.log(person.id === personID);
      return person.id !== personID;
    });
    console.log(this.peopleList);
  }

  classifyPeopleByAge(age: number) {
    const peopleOverAge: Person[] = [];
    const peopleUnderAge: Person[] = [];

    this.peopleList.forEach((person) => {
      if (person.age >= age) {
        peopleOverAge.push(person);
      } else {
        peopleUnderAge.push(person);
      }
    });

    return { peopleOverAge, peopleUnderAge };
  }
}
