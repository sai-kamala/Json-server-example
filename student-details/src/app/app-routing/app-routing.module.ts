import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule ,Routes} from '@angular/router';
import { StudentFormModule } from '../student-form/student-form.module';
import { StudentsListComponent } from '../students-list/students-list.component';
import { StudentInformationComponent } from '../student-information/student-information.component';
import {LoginPageComponent} from '../login-page/login-page.component';

const routes:Routes = [
  {path:'',component:LoginPageComponent},
  {
    path :'StudentsListComponent',
    component: StudentsListComponent,
  },
  {
    path: 'StudentInfo/:id',
    component: StudentInformationComponent,

  },
  // {
  //   path: 'student-form',
  //   loadChildren: './student-form/student-form.module#StudentFormModule',
  // }
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
