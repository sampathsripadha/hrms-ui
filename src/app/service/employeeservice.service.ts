import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class EmployeeserviceService {
baseUrl:string="http://localhost:6010/employees/";

  constructor(private http:HttpClient) { }
  getEmployee():Observable<any>{
    return this.http.get<any>(this.baseUrl);
  }
}
