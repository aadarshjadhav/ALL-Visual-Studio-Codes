import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-simple-employee',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './simple-employee.component.html',
  styleUrl: './simple-employee.component.css'
})
export class SimpleEmployeeComponent {

 

   emp_array: {
    emp_id: number,
    employee_name: string,
    emp_salary: number,
  }[] = [
    { emp_id: 1, employee_name: "John Doe", emp_salary: 50000 },
    { emp_id: 2, employee_name: "Jane Smith", emp_salary: 60000 },
    { emp_id: 3, employee_name: "Alice Johnson", emp_salary: 55000 },
  ]


  countArray: number[] = [1,2,3,5,6,7,8];
}
