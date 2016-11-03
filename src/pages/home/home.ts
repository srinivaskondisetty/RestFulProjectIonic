import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { BasicService } from '../../services/basic.service';
import { LoanDetails } from '../loandetails/loandetails';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public data:any;
  public error: any;
  loans: any;
  constructor(public navCtrl: NavController, public basicService : BasicService) {
    this.loans = [];
  }

getDetails(event, item) {
    this.navCtrl.push(LoanDetails, {
      loan_id: item
    });
}

  ngOnInit(){    
    this.basicService.getLoans().subscribe(
      loans => {
        this.loans = loans;
      }
    );
  }

}
