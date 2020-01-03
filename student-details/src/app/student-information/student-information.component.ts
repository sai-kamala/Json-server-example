import { Component, OnInit } from '@angular/core';
import {StudentDetailsService} from '../student-details.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-student-information',
  templateUrl: './student-information.component.html',
  styleUrls: ['./student-information.component.scss']
})
export class StudentInformationComponent implements OnInit {
  studentDetail:any;
  constructor(private service: StudentDetailsService, private route:ActivatedRoute ) {}

  ngOnInit() {   
    this.route.params.subscribe( params =>{
     let routeId = params.id;
     this.service.getStudentInfo(routeId).subscribe(data=>{
       this.studentDetail = data;
     });
    }); 
  } 
}
