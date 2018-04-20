import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: '<input type="button">',
  
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {
  message = 'Hello from component';
  counter:number = 0;
  constructor() { }
  increase (){
    this.counter++;
  }
  ngOnInit() {
  }

}
