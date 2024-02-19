import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-demo',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './form-demo.component.html',
  styleUrl: './form-demo.component.css'
})
export class FormDemoComponent {

  
  empid:number=0
  empname:string=""
  empsal:number=0
  employeeform:any[]=[]

  // constructor(empname:string="",empid:number=0,empsal:number=0)
  // {


  // }

  addEmployee()
  {
    this.employeeform.push({ emponeid: this.empid, empname: this.empname, empsal: this.empsal });
    console.log(this.employeeform)
    // Clear the input fields after adding an employee
  }

}
