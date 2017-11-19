import { Component, OnInit } from '@angular/core';
import { Loan } from '../loan';
import { loanService } from '../loan.service';

@Component({
  selector: 'app-loan',
  templateUrl: './loan.component.html',
  styleUrls: ['./loan.component.css']
})

export class LoanComponent implements OnInit {
  loans: Loan[] = [];

constructor(private loanService: loanService) { }

  ngOnInit() {
    this.getLoans();
  }

  getLoans(): void {
    this.loanService.getLoans()
    .subscribe(loans => this.loans = loans.slice(1, 5));
  }

}
