import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Person } from '@/models/Person';
import { ManagePeopleService } from '@/services/manage-people.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
})
export class CreateComponent {
  @Output() insertPerson: EventEmitter<Person> = new EventEmitter();

  registerForm = this.fb.group({
    id: [0],
    name: ['', Validators.required],
    lastname: ['', Validators.required],
    age: [0, Validators.required],
    location: ['', Validators.required],
  });

  constructor(
    private fb: FormBuilder,
    private mpService: ManagePeopleService
  ) {}

  onSubmit() {
    if (this.registerForm.valid) {
      this.insertPerson.emit(this.registerForm.value as Person);
    }
  }
}
