import { Component, OnInit } from '@angular/core';
import { StudentDetailsService } from '../student-details.service';


@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.scss']
})
export class StudentsListComponent implements OnInit {
  title = 'student-details';
  studentList: any;
  studentNames: any;
  totalNames: any;
  listShow: Boolean;
  enteredName: any;
  displayButtons: boolean = false;
  constructor(private service: StudentDetailsService) { }
  ngOnInit() {
    this.service.getStudentList().subscribe(data => {
      this.studentList = data;
    });
    this.service.getStudentNames().subscribe(data => {
      this.studentNames = data;
      this.totalNames = this.studentNames;
    })
  }
  filterData() {
    if ([null, undefined, ''].indexOf(this.enteredName) > -1) {
      this.totalNames = this.studentNames;
    }
    this.totalNames = this.studentNames.filter(item => {
      return item.toLowerCase().indexOf(this.enteredName.toLowerCase()) > -1
    })
  }
  appendName(e) {
    let val = e.target.text;
    if (val == "" || val == undefined) {
      this.displayButtons = false;
    }
    this.enteredName = val;
    this.displayButtons = true;
  }
  clearInput() {
    this.enteredName = "";
    this.totalNames = this.studentNames;
  }
  displayList(){
    this.totalNames=[];
    this.totalNames.push(this.enteredName);
  }
}
