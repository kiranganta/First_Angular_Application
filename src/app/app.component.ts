import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
//   template: `  
// <div (click)="onDivClick()">
// <h2> {{title}}</h2>
// <button class="btn btn-primary" 
// [class.active]="isActive" (click)="onSave($event)">Button</button>

// <button [style.backgroundColor]="isActive? 'red':'blue'" >styleBiding</button>
// </div>
// <input  [(ngModel)]="email" (keyup.enter)="onKeyUp()"/>
//   <h2>
//   Title : {{ course.title |uppercase|lowercase}}<br>
//   students : {{ course.students |number }}<br>
//   rating :  {{ course.rating |number :'1.2-2'}}<br>
 
//   price:  {{ course.price|currency:'AUD':true:'2.2-2'}}<br>
//   releaseDate: {{course.releaseDate| date:'shortDate'}}<br>
  
//   {{shortMessage | summarypipe:100}}
//   `,
templateUrl:'./app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todayTest';
  isActive=true;
  email="abc@gmail.com";
  course ={
    title :"The Complate Angular Course",  
    students:30124,
    rating : 4.9465,
    price :190.95,
    releaseDate:new Date( 2020,3,1)

  }

  shortMessage ="In this section you will learn about what Augury is and the features that are available. Later lessons in this guide will go into more detail.."

  onSave($event){
    $event.stopPropagation();
    console.log('on save',$event)
  }
  onDivClick(){

    console.log('onDivClick() clicked')
  }

  onKeyUp(){
    //console.log('key enter'+$event.target.value)
    console.log('key enter'+this.email)
  }
}
