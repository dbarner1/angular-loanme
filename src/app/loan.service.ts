import { Injectable } from '@angular/core';
import { Loan } from './loan';
import { LOANS } from './mock-loans';
import { LOAN } from './mock-loans';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class loanService {

  constructor() { }

  getLoans(): Observable<Loan[]> {
    return of(LOANS);
  }

  getLoan(): Observable<Loan[]> {
    return of(LOAN);
  }
}
