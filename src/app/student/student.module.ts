import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentAddComponent } from './student-add/student-add.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { StudentListComponent } from './student-list/student-list.component';
import { StudentEditComponent } from './student-edit/student-edit.component';
import { StudentDeleteComponent } from './student-delete/student-delete.component';



@NgModule({
  declarations: [
    StudentAddComponent,
    StudentDetailsComponent,
    StudentListComponent,
    StudentEditComponent,
    StudentDeleteComponent
  ],
  exports: [
    StudentAddComponent,
    StudentDetailsComponent,
    StudentListComponent,
    StudentEditComponent,
    StudentDeleteComponent
  ],
  imports: [
    CommonModule
  ]
})
export class StudentModule { }
