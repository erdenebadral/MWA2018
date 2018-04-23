import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[appTest]'
})
export class TestDirective {

  constructor() { }
  @HostBinding('[class.valid]') isValid;

}
