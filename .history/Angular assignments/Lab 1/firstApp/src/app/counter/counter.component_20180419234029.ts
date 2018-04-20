import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: '<button (click) = "increase()">+</button> {{counter}}<button (click) = "decrease()">-</button>',
  
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {
  message = 'Hello from component';
  counter:number = 0;
  constructor() { }
  increase ():void{
    this.counter++;
  }
  decrease():void{
    this.counter--;
  }
  ngOnInit() {
  }

}
