import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: '<button (click) = "increase()">+</button> {{counterValue}}<button (click) = "decrease()">-</button>',
  inputs:['counter'],
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {
  message = 'Hello from component';
  counterValue:number = 0;
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
