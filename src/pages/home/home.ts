import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { BasicService } from '../../services/basic.service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public data:any;
  public error: any;
  constructor(public navCtrl: NavController, public basicService : BasicService) {
    
  }


  ionViewWillEnter(){    
    this.basicService.getJson().subscribe(     
      data => {       
        this.data = JSON.stringify(data)
      },
      err => {
        this.error = err }
    );
  }
  



}
