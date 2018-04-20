import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div>My number is : {{counterValue}} </div>
  <app-counter [counterValue]="counterValue"></app-counter>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  counterValue:number = 0;
  title = 'app';
}
