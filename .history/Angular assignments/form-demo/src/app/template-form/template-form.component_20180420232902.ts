import { Component, OnInit, ViewChild } from '@angular/core';
import { Signup } from './Signup';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent {

  model: Signup = new Signup();
  
  @ViewChild('f') form: any;

  langs: string[] = [
    'English',
    'French',
    'German',
  ];

  onSubmit() {
    if (this.form.valid) {
      console.log("Form Submitted!");
      console.log(JSON.stringify(this.model));
      this.form.reset();
    }
  }

}
