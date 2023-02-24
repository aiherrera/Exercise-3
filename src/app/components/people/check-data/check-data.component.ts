import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Person } from '@/models/Person';
import { ManagePeopleService } from '@/services/manage-people.service';

@Component({
  selector: 'app-check-data',
  templateUrl: './check-data.component.html',
  styleUrls: ['./check-data.component.scss'],
})
export class CheckDataComponent {
  age: number = 0;
  peopleOverAge: Person[] = [];
  peopleUnderAge: Person[] = [];

  constructor(
    private route: ActivatedRoute,
    private mpService: ManagePeopleService
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      this.age = params['age'];
      this.classifyPeopleByAge();
    });
  }

  classifyPeopleByAge() {
    const values = this.mpService.classifyPeopleByAge(this.age);
    this.peopleOverAge = values.peopleOverAge;
    this.peopleUnderAge = values.peopleUnderAge;
  }
}
