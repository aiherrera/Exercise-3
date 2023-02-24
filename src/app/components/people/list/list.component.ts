import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Person } from '@/models/Person';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent {
  @Output() onDeletePerson: EventEmitter<number> = new EventEmitter();
  @Input() peopleList: Person[] = [];

  displayedColumns: string[] = [
    'id',
    'name',
    'lastname',
    'age',
    'location',
    'remove',
  ];

  deletePerson(personID: number) {
    console.log(personID);
    this.onDeletePerson.emit(personID);
  }
}
