import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: '{{message}}',
  
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {
  message = 'Hello from component';
  constructor() { }

  ngOnInit() {
  }

}
