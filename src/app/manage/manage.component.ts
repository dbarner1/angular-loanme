import { Component, OnInit } from '@angular/core';
import { Loan } from '../loan';
import { loanService } from '../loan.service';

@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.css']
})
export class ManageComponent implements OnInit {
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
