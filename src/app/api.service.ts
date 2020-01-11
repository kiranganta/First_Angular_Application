import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CustomerComponent } from './customer/customer.component';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  apiURL: string ='assets/db.json' ;//'http://www.server.com/api/';
    public firstPage: string = "";
    public prevPage: string = "";
    public nextPage: string = "";
    public lastPage: string = "";
  constructor(private http: HttpClient) {}

  public createCustomer(customer: CustomerComponent){}

  public updateCustomer(customer: CustomerComponent){}
  
  public deleteCustomer(id: number){}
  
  public getCustomerById(id: number){}
  
  
  public getCustomers(url: string){

  return this.http.get<CustomerComponent[]>(this.apiURL);
  }
}