import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddSemesterPage } from './add-semester.page';

const routes: Routes = [
  {
    path: '',
    component: AddSemesterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddSemesterPageRoutingModule {}
