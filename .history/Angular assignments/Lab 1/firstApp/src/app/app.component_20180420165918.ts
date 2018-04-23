import { Component } from '@angular/core';
import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-root',
  template: ` <div>My number is : {{myCounter}} </div>  <app-counter (counterEvent)="checkCounter($event)"></app-counter>
    <hr>          
    <app-my-list></app-my-list>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  myCounter:number = 0;
  checkCounter(num:number):void{
    this.myCounter = num;
  }
  title = 'app';
}
