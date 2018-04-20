import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { listenToElementOutputs } from '@angular/core/src/view/element';
//import { EventEmitter } from 'events';

@Component({
  selector: 'app-counter',
  template: '<button (click) = "increase()">+</button> {{counterValue}}<button (click) = "decrease()">-</button>',
  //inputs:['counter'],
  outputs:['counterEvent'],
  styleUrls: ['./counter.component.css']
  
})
export class CounterComponent implements OnInit {
  message:string = 'Hello from component';
  counterValue:number = 0;
  counterEvent:EventEmitter<any> = new EventEmitter<any>();
  constructor() { }
  increase ():void{
    this.counterValue++;
  }
  decrease():void{
    this.counterValue--;
  }
  ngOnInit() {
  }

}
