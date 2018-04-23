import { Component, OnInit, ViewChild, AfterViewInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-my-list',
  templateUrl: './my-list.component.html',
  styleUrls: ['./my-list.component.css']
})
export class MyListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  @ViewChild('box') element:ElementRef;
  ngAfterViewInit(){
    //console.log(this.element.nativeElement.value);
  }
  printValue():void{
    console.log(this.element.nativeElement.value);
  }
}
