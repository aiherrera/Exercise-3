import { Component } from '@angular/core';
import { Person } from '@/models/Person';
import { ManagePeopleService } from '@/services/manage-people.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss'],
})
export class PeopleComponent {
  peopleList: Person[] = [];

  constructor(private mpService: ManagePeopleService) {}

  ngOnInit() {
    this.getAllPeople();
  }

  getAllPeople() {
    this.peopleList = [...this.mpService.getAllPeople()];
  }

  insertPerson(person: Person) {
    this.mpService.insertPerson(person);
    this.getAllPeople();
  }

  deletePerson(personID: number) {
    this.mpService.deletePerson(+personID);
    this.getAllPeople();
  }
}
