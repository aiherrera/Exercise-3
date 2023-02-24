import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckDataComponent } from './components/people/check-data/check-data.component';
import { PeopleComponent } from './components/people/people.component';

const routes: Routes = [
  { path: '', component: PeopleComponent },
  { path: 'check-data', component: CheckDataComponent },
  // { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
