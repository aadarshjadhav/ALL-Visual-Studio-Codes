import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyLocalService {

  employee:any[]=[]


  constructor() { 

    this.employee=[
      {empsid:101, empsname:"Aadarsh",salary:20000},
      {empsid:102, empsname:"Suraj",salary:20000},
      {empsid:103, empsname:"Bhavesh",salary:20000}

  ]
  }

  getEmployeeInfo()
  {
    return this.employee
  }

  addEmployee(emp:any)
  {
    this.employee.push({empsid:emp.empsid,empsname:emp.empsname,salary:emp.salary})
  }

  deleteEmployee(id:any)
  {
    let i=0
      for( ;i<this.employee.length;i++)
      {
          if(this.employee[i].empsid==id)
          {
            break;
          }

      }
      this.employee.splice(i,1);
  }

  updateEmployee(emp:any)
  {
  for(let i=0;i<this.employee.length;i++)
  {
    if(this.employee[i].empsid==emp.empsid)
    {
      this.employee[i].empsname=emp.empsname
      this.employee[i].salary=emp.salary
      break;
    }
  }
  }
}
