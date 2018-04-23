import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-my-list',
  templateUrl: './my-list.component.html',
  styleUrls: ['./my-list.component.css']
})
export class MyListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  @ViewChild('box') element;
  ngAfterViewInit(){
    console.log(this.element);
  }
  printValue():void{
    console.log(this.element.value);
  }
}
