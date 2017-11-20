import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { HomeComponent }        from './home/home.component';
import { LoanComponent }        from './loan/loan.component';
import { ManageComponent }      from './manage/manage.component';
import { CustomerComponent }    from './customer/customer.component';
import { HelpComponent }        from './help/help.component';

const routes: Routes = [
  { path: '', redirectTo: '/join', pathMatch: 'full' },
  { path: 'join', component: HomeComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'customer/:id', component: CustomerComponent },
  { path: 'loans', pathMatch: 'full', component: ManageComponent },
  { path: 'loans/:id', component: LoanComponent },
  { path: 'help', component: HelpComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
