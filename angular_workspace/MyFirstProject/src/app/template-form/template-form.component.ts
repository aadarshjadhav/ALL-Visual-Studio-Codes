import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonEngine } from '@angular/ssr';

@Component({
  selector: 'app-template-form',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './template-form.component.html',
  styleUrl: './template-form.component.css'
})
export class TemplateFormComponent {

  form={

    fullName:"",
    username:"",
    email:"",
    password:"",
    acceptTerms:false

  }

  OnSubmit()
  {
    console.log(this.form)
  }

  OnReset(form:NgForm)
  {
    form.reset()
  }

}
