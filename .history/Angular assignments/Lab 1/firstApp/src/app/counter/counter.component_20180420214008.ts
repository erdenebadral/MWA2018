import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { listenToElementOutputs } from '@angular/core/src/view/element';
//import { EventEmitter } from 'events';

@Component({
  selector: 'app-counter',
  template: '<button (click) = "increase()">+</button> {{counterValue}}<button (click) = "decrease()">-</button>',
  //inputs:['counter'],
  outputs:['counterEvent'],
  styleUrls: ['./counter.component.css'],
  
  
})
export class CounterComponent implements OnInit {
  message:string = 'Hello from component';
  counterValue:number = 0;
  counterEvent:EventEmitter<number> = new EventEmitter<number>();
  constructor() { }
  increase ():void{
    this.counterValue++;
    this.counterEvent.emit(this.counterValue);
  }
  decrease():void{
    this.counterValue--;
    this.counterEvent.emit(this.counterValue);
  }
  ngOnInit() {
  }

}
