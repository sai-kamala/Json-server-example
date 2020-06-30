import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  name:any = "angular";
  data:any = 4;
  constructor() { }

  // ngOnChanges() {
  //   console.log(`ngOnChanges - data is ${this.data}`);
  // }

  // ngOnInit() {
  //   console.log(`ngOnInit  - data is ${this.data}`);
  // }

  // ngDoCheck() {
  //   console.log("ngDoCheck")
  // }

  // ngAfterContentInit() {
  //   console.log("ngAfterContentInit");
  // }

  // ngAfterContentChecked() {
  //   console.log("ngAfterContentChecked");
  // }

  // ngAfterViewInit() {
  //   console.log("ngAfterViewInit");
  // }

  // ngAfterViewChecked() {
  //   console.log("ngAfterViewChecked");
  // }

  // ngOnDestroy() {
  //   console.log("ngOnDestroy");
  // }
}


