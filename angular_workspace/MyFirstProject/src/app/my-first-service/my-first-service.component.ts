import { Component, OnInit } from '@angular/core';
import { MyLocalService } from '../my-local.service';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-my-first-service',
  standalone: true,
  imports: [FormsModule,CommonModule,ReactiveFormsModule,FormsModule],
  providers:[MyLocalService],
  templateUrl: './my-first-service.component.html',
  styleUrl: './my-first-service.component.css'
})
export class MyFirstServiceComponent implements OnInit{ //Doubt:I was able to run with implementinng OnInit?

  employee:any
  isupdate=false

  constructor(public myserv:MyLocalService, public fb:FormBuilder)
  {

  }

 

  empform=this.fb.group({
    empsid:[,Validators.required],
    empsname:[,Validators.required],
    salary:[,Validators.required]
  })
  ngOnInit():void{

    // this.employee=this.myserv.getEmployeeInfo()
    // console.log(this.employee)

    this.getAllEmployee()

     /*
  Initialization: ngOnInit is often used to initialize data properties or retrieve data from services. 
  This is because at the time ngOnInit is called, all of the component's input properties are available.
  Dependency Injection: Since Angular components often depend on services, ngOnInit is an appropriate 
  place to inject these services into the component and perform any necessary initialization tasks with 
  them.
  */
  }

  getAllEmployee()
  {
    this.employee=this.myserv.getEmployeeInfo()
  }

  clearForm(){

    this.empform.reset()
  }

  SaveData(){

    console.log(this.empform.value)
    let emp=this.empform.value

    if(this.isupdate==false)
    {
      this.myserv.addEmployee(emp)
    }
    else{

      this.myserv.updateEmployee(emp)
      this.isupdate=false

    }

    this.empform.reset()
    this.getAllEmployee()

  }

  deleteEmp(id:any)
  {
    let result=confirm("Do you want to delete"+id+" ?")
    if(result==true)
    {
      this.myserv.deleteEmployee(id)
      this.getAllEmployee();
    }
  }

  editEmp(emp:any){
    console.log("Hiiii" +" "+emp.value)
     this.isupdate=true
     this.empform.setValue({
       empsid:emp.empsid,
       empsname:emp.empsname,
       salary:emp.salary
     })
 
   }


}
