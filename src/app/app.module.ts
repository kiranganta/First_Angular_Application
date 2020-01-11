import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SummaryPipe } from './summary.pipe';
import { HttpCallComponent } from './http-call/http-call.component';
import { CustomerComponent } from './customer/customer.component';
import {RouterModule} from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { FollowersComponent } from './followers/followers.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SummaryPipe,   
    HttpCallComponent, CustomerComponent, NavbarComponent, FollowersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path:'home',component:HomeComponent},
      {path:'customers/:id',component:CustomerComponent},
      {path:'customers',component:CustomerComponent},
      {path:'followers/:id',component:FollowersComponent},
      {path:'followers',component:FollowersComponent},
      
    ])
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
