import { Directive, HostBinding, OnInit, HostListener } from '@angular/core';

@Directive({
  selector: '[appTest]'
})
export class TestDirective implements OnInit{

  constructor() { }
  @HostBinding('style.width.px') isValid:number;
  ngOnInit(){
    this.isValid = 200;
  }
  @HostListener('mouseover') myFunc(){
    this.isValid++;
  }

}
