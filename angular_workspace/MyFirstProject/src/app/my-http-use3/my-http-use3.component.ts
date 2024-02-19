import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule, RouterOutlet } from '@angular/router';
import { MyHttpService } from '../my-http.service';
import { Myhttp3Service } from '../myhttp3.service';

@Component({
  selector: 'app-my-http-use3',
  standalone: true,
  imports: [CommonModule,HttpClientModule,RouterModule, RouterOutlet,ReactiveFormsModule],
  providers:[Myhttp3Service,HttpClient],
  templateUrl: './my-http-use3.component.html',
  styleUrl: './my-http-use3.component.css'
})
export class MyHttpUse3Component implements OnInit{

  user:any
  empform!:FormGroup
  isupdate!:boolean
  constructor(public myclient:Myhttp3Service,public fb:FormBuilder)
  {

  }
  ngOnInit(): void {
    
    this.getAllEmp()

    this.empform=this.fb.group({

      id:[,Validators.required],
      fname:[,Validators.required],
      salary:[,Validators.required]

    })
    
  }

  getAllEmp()
  {
    this.myclient.getData().subscribe(result=>{this.user=result})
  }

  get id()
  {
    return this.empform.get('id')
  }

  get fname()
  {
    return this.empform.get('fname')
  }

  get salary()
  {
    return this.empform.get('salary')
  }

  editEmp(emp:any)
  {
    this.isupdate=true

    this.empform.setValue({

      id:emp.id,
      fname:emp.fname,
      salary:emp.salary
    })
  }

  deleteEmp(id:any)
  {
    let res=confirm('Do you want to delete'+ id+'?')

    if(res==true)
    {
      this.myclient.deleteData(id).subscribe(result=>{
        this.getAllEmp()
      })
    }
  }

  saveDate_ts()
  {
    let emp=this.empform.value
    if(!this.isupdate)
    {
      this.myclient.saveData(emp).subscribe(rersult=>{})
    }
    else
    {
      let id =parseInt(this.empform.value.id)
      this.myclient.updateEmp(id,emp).subscribe(result=>{})
    }

    this.getAllEmp()
    this.isupdate=false
    this.empform.reset()
  }

  clearForm()
  {

  }

}
