import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { TopNavigationComponent } from './navigation/top-navigation/top-navigation.component';
import { BottomNavigationComponent } from './navigation/bottom-navigation/bottom-navigation.component';
import { LhsNavigationComponent } from './navigation/lhs-navigation/lhs-navigation.component';
import { CreateEmployeeComponent } from './employee/create-employee/create-employee.component';
import { ViewEmployeeComponent } from './employee/view-employee/view-employee.component';
import { UpdateEmployeeComponent } from './employee/update-employee/update-employee.component';
import { DeleteEmployeeComponent } from './employee/delete-employee/delete-employee.component';


@NgModule({
  declarations: [
    AppComponent,

    HeaderComponent,
    FooterComponent,
    TopNavigationComponent,
    BottomNavigationComponent,
    LhsNavigationComponent,
    CreateEmployeeComponent,
    ViewEmployeeComponent,
    UpdateEmployeeComponent,
    DeleteEmployeeComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
