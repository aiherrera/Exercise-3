import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PeopleComponent } from './people.component';
import { CreateComponent } from './create/create.component';
import { ListComponent } from './list/list.component';
import { AngularMaterialModule } from 'src/app/angular-material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AgeDialogComponent } from './age-dialog/age-dialog.component';
import { CheckDataComponent } from './check-data/check-data.component';

@NgModule({
  declarations: [
    PeopleComponent,
    CreateComponent,
    ListComponent,
    AgeDialogComponent,
    CheckDataComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AngularMaterialModule,
  ],
})
export class PeopleModule {}
