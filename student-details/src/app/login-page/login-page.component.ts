import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {StudentDetailsService} from '../student-details.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
user:any={};
Authuser:any;
invalidUser:Boolean;
constructor(private service:StudentDetailsService, private router:Router) {}

  ngOnInit() {
  }
  focusFunction(){
    this.invalidUser= false;
  }
  submitted(form){
    this.user.name = form.name;
    this.user.password = form.password;
    var loop = true;
    this.service.checkAuthUser().subscribe(data=>{
      data.forEach(ele => {
        if(loop){
        if((ele.name === this.user.name) && (ele.password === this.user.password)){
          this.Authuser = this.user;   
          loop = false;
        }
      }
    })
    if(this.Authuser){
      this.router.navigate(['StudentsListComponent']);
    }else{
      this.invalidUser= true;
      this.user={};
    }
  })
    console.log(this.Authuser);
  }
}

