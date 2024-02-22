import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';



@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule,CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {



  // ngOnInit(): void {


  // }
  isdisabled:boolean=true;
  username:string=""
  password:string=""
  
  login()
  {
    if(this.username=="yash" && this.password=="gupta")
    {
      alert("login succesfull")
    }
    else{

      this.isdisabled=true;
      this.username="";
      this.password="";
      alert("login not successfull......")
    }
  }


  getDetails()
  {
    this.isdisabled=false;
  }

}
