import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'http-call',
  templateUrl: './http-call.component.html',
  styleUrls: ['./http-call.component.css']
})
export class HttpCallComponent implements OnInit {
  apiURL: string ='assets/db.json' ;//'http://www.server.com/api/';
customers;

  constructor(private apiService:ApiService) {  
   }

   ngOnInit(){
    this.apiService.getCustomers(this.apiURL)
    .subscribe(res=>{
    console.log(res);
    this.customers=res;

  },(error:Response)=>{
    if(error.status==404){

      alert('error has been deleted already')
    }else{
    alert(error);
    console.log(error);
    }
  })
}

}

