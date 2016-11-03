import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { Http,HttpModule } from '@angular/http';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { BasicService } from '../services/basic.service';
import { LoanDetails } from '../pages/loandetails/loandetails';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoanDetails
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoanDetails  
  ],
  providers: [BasicService]
})
export class AppModule {}
