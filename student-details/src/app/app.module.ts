import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import{HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import {AppRoutingModule} from './app-routing/app-routing.module';
import { StudentsListComponent } from './students-list/students-list.component';
import { StudentInformationComponent } from './student-information/student-information.component';
import { StudentsEligibleComponent } from './students-eligible/students-eligible.component';
import { LoginPageComponent } from './login-page/login-page.component';
//import {BrowserAnimationsModule} from '@angular/platform browser/animations';
//import {MatDatepickerModule} from '@angular/material/datepicker';

@NgModule({
  declarations: [
    AppComponent,
    StudentsListComponent,
    StudentInformationComponent,
    StudentsEligibleComponent,
    LoginPageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    //BrowserAnimationsModule,
    //MatDatepickerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
