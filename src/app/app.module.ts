import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { LoansComponent } from './loans/loans.component';
import { loanService }       from './loan.service';
import { LoanComponent } from './loan/loan.component';
import { ManageComponent } from './manage/manage.component';
import { HeaderComponent } from './header/header.component';
import { CustomerComponent } from './customer/customer.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HomeComponent,
    LoansComponent,
    LoanComponent,
    ManageComponent,
    HeaderComponent,
    CustomerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [loanService],
  bootstrap: [AppComponent]
})
export class AppModule { }
