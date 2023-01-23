import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';


@Component({
  selector: 'app-banklogic',
  templateUrl: './banklogic.component.html',
  styleUrls: ['./banklogic.component.css']
})
export class BanklogicComponent implements OnInit {

  account!:number;
  password!:string;
  credit :any;
  data2:any;
  withdraw :any;
  data : any;
  data3:any;
  sum:any;
  
  isHidden :boolean=true;
  isCredit :boolean=true;
  isWithdraw:boolean=true;
  isCreditEnable : boolean = true; // to show and hide the edit button
  
  constructor(private service : HttpService) { }

  ngOnInit(): void {
  }
  onSend(account:any,password:any){
    
    this.service.GetData(account,password)
    .subscribe((response)=>{
      console.log(response);
      this.data=response;
      this.isHidden=false;
    })
  }

  onCredit(account:any,password:any,credit:any){
    this.service.CreditBalance(account,password,credit)
    .subscribe((response)=>{
      this.credit=response;
      this.data2=credit;
      this.isCredit=false;
      this.isWithdraw=true;
      alert(credit+" credited...")
    })
    
  }
  
  onWithdraw(account:any,password:any,withdraw:any){
    this.service.WithdrawBalance(account,password,withdraw)
    .subscribe((response)=>{
      this.withdraw=response
      this.data3=withdraw;
      this.isWithdraw=false;
      this.isCredit=true;
      
    })
  }

  onRefresh(credit:any){
    credit.on();
  }


}
