import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule ,Routes} from '@angular/router';
import { StudentsListComponent } from '../students-list/students-list.component';
import { StudentInformationComponent } from '../student-information/student-information.component';

const routes:Routes = [
  {
    path :'' ,
    component: StudentsListComponent,
  },
  {
    path: 'StudentInfo/:id',
    component: StudentInformationComponent,

  },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ],
})
export class AppRoutingModule { }
