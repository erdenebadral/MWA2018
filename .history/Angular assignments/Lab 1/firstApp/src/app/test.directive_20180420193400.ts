import { Directive, HostBinding, OnInit, HostListener } from '@angular/core';

@Directive({
  selector: '[appTest]'
})
export class TestDirective implements OnInit{

  constructor() { }
  @HostBinding('style.width.px') isValid:number;
  ngOnInit(){
    this.isValid = 3;
  }
  @HostListener('mouseover') myFunc(){
    console.log("asdasdasdasd");
  }

}
