import { Component, OnInit } from '@angular/core';
import { Loan } from '../loan';
import { loanService } from '../loan.service';

@Component({
  selector: 'app-loan',
  templateUrl: './loan.component.html',
  styleUrls: ['./loan.component.css']
})

export class LoanComponent implements OnInit {
  loan: Loan[] = [];

constructor(private loanService: loanService) { }
  ngOnInit() {
    this.getLoan();
  }

  getLoan(): void {
    this.loanService.getLoan()
    .subscribe(loan => this.loan = loan);
  }

}
