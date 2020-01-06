import { Injectable } from '@angular/core';
import{ HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentDetailsService {

  constructor(private http:HttpClient) { }
  getStudentList():Observable<any>{
    return this.http.get("http://localhost:3000/response");
  }
  getStudentInfo(routeID:any):Observable<any>{
    return this.http.get("http://localhost:3000/employeeDetails/"+routeID);
  }
  getStudentNames():Observable<any>{
    return this.http.get("http://localhost:4000/studentNames");
  }
}
