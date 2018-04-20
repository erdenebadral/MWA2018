import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: ' <div>My number is : {{counterValue1}} </div>',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  counterValue1:number = 0;
  title = 'app';
}
