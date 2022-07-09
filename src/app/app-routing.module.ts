import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateEmployeeComponent } from './employee/create-employee/create-employee.component';
import { ViewEmployeeComponent } from './employee/view-employee/view-employee.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path : "home", component : HomeComponent},
  {path : "createEmployee", component : CreateEmployeeComponent},
  {path : "viewEmployee", component : ViewEmployeeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
