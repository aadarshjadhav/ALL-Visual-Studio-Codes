import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';

@Component({
  selector: 'app-form-with-material-demo',
  standalone: true,
  imports: [FormsModule,CommonModule,MatFormFieldModule, MatInputModule,MatCheckboxModule],
  templateUrl: './form-with-material-demo.component.html',
  styleUrl: './form-with-material-demo.component.css'
})
export class FormWithMaterialDemoComponent {

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
