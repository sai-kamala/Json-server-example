import { Component,OnInit } from '@angular/core';
import {StudentDetailsService} from './student-details.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'student-details';
  tableData:any;
  ngOnInit(){
    this.tableData.getData.subscribe()

  }
}
