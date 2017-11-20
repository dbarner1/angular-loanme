import { Component, OnInit } from '@angular/core';
import { Loan } from '../loan';
import { loanService } from '../loan.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})

export class CustomerComponent implements OnInit {
  loans: Loans[] = [];

  constructor(private loanService: loanService) { }

  ngOnInit() {
    this.getLoans();
  }

  getLoans(): void {
    this.loanService.getLoans()
      .subscribe(loans => this.loans = loans.slice(1, 5));
  }

}
