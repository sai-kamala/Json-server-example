import { Component, OnInit } from '@angular/core';
import {StudentDetailsService} from '../student-details.service';


@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.scss']
})
export class StudentsListComponent implements OnInit {
  title = 'student-details';
  tableData:any;
  constructor(private service: StudentDetailsService){}
  ngOnInit(){
    this.service.getStudentList().subscribe(data => {
    this.tableData= data;
    });
 }
}
