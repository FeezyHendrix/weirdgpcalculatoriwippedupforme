import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddSemesterPageRoutingModule } from './add-semester-routing.module';

import { AddSemesterPage } from './add-semester.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddSemesterPageRoutingModule
  ],
  declarations: [AddSemesterPage]
})
export class AddSemesterPageModule {}
