import { Component, OnInit } from '@angular/core';
import { BasicService } from '../../services/basic.service';
import { NavParams } from 'ionic-angular';

@Component({
    selector: 'page-loandetail',
    templateUrl: 'loandetails.html'
})
export class LoanDetails {
    private loanDetails : any;
    constructor(private params: NavParams, private basicService: BasicService) { }

    ngOnInit() {       
        var loanid = this.params.data.loan_id;       
        this.basicService.getLoanById(loanid).subscribe(
            loanData => {               
                this.loanDetails = loanData;
            }
        )
     }
}