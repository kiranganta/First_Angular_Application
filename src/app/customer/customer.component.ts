import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
    id: number;
    name: string;
    email: string;
    phone: string;
    city: string;
    country:string;
    title:string;
    apiURL: string ='http://localhost:3000/customers';
    customers ;
  constructor(private apiservice:ApiService,
    private httpClient:HttpClient) { }

  ngOnInit() {
     this.httpClient
    .get<CustomerComponent[]>(this.apiURL).subscribe(respose=>{
      this.customers=respose;
      console.log(respose)
    })
      
    
    }

  }
