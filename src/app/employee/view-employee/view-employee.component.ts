import { Component, OnInit } from '@angular/core';
import { catchError, observable } from 'rxjs';
import { EmployeeService } from 'src/app/service/EmployeeService';

@Component({
  selector: 'app-view-employee',
  templateUrl: './view-employee.component.html',
  styleUrls: ['./view-employee.component.css']
})
export class ViewEmployeeComponent implements OnInit {
  employees:any;

  constructor(private employeeService:EmployeeService) { }

  ngOnInit(): void {
    const observable = this.employeeService.getEmployee();
    observable.subscribe(
      data => {
        if (data.status=200){
            this.employees=data.result;
        }
        console.log(data.result);

      }
    );
    
  }

}
