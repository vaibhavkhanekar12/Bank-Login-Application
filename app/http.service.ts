import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private url : string='http://localhost:8800/bank';
  constructor(private http : HttpClient) { }

  GetData(account:any,password:any){
   return (this.http.get(`${this.url}/accountbalance/${account}/${password}`));
  }
  CreditBalance(account:any,password:any,credit:number){
    return (this.http.post(`${this.url}/credit/${account}/${password}/${credit}`,credit));
  }

  WithdrawBalance(account:any,password:any,withdraw:number){
    return (this.http.post(`${this.url}/withdraw/${account}/${password}/${withdraw}`,withdraw));
  }

}
