import { Component, OnInit } from '@angular/core';
import { StudentDetailsService } from '../student-details.service';
import { Data } from '../data';

@Component({
  selector: 'app-students-eligible',
  templateUrl: './students-eligible.component.html',
  styleUrls: ['./students-eligible.component.scss']
})
export class StudentsEligibleComponent implements OnInit{
  eligibleList:any;
  tableHeaders = Data.tableHeaders;
  tableRows = Data.tableRows;
  selectAll = false;
  displayList;
  select:any;
  constructor(private service:StudentDetailsService) { }

  ngOnInit() {
    this.service.getStudentEligibility().subscribe( data => {
    this.eligibleList = data;
    this.displayList = this.eligibleList;
    this.eligibleList.forEach(obj => {
      obj.select = false;
    })
    })
  }
  showActiveList(){
    this.displayList = this.eligibleList;
    this.displayList = this.displayList.filter(a => {
      if (a["active"] == "true")
        return this.displayList;
    });
  }
  showInActiveList(){
    this.displayList = this.eligibleList;
    this.displayList = this.displayList.filter(a => {
      if (a["active"] == "false")
        return this.displayList;
    });
  }
  checkUncheck(e,row){
    var loop = true;
  row.select = e.target.checked;
  this.displayList.forEach(obj => {
    if(loop){
      if(obj.select == true){
        this.selectAll = true;
      }
      else{
        this.selectAll = false;
        loop = false;
      }
    }                                                                                                                                                                                                                                                      
  return false;
  })

  }
  checkUncheckAll(e){
    debugger
    this.selectAll = e.target.checked;
      this.displayList.forEach(obj => {
        if(this.selectAll)
          obj.select = true;
        else
          obj.select = false;
      })
  }
}
