import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-directive-demo',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './directive-demo.component.html',
  styleUrl: './directive-demo.component.css'
})
export class DirectiveDemoComponent {


  show1:boolean=false
  age:number=0

  color:string=""

  numberfirst:number=0
  numbersecond:number=0

  evenoddnum:number=0
  number_five:number=0
  num_word:number=0
  week_day:number=0

  //Form Data attributes
  employee_name:string=""

  //For ng Array Demo

  // employee:[]=[]
  
  movies:any[]=[]
  students:any[]=[]

  employee2:any[]=[]
  games:any[]=[]
  gender:string=""
  
  numberfirst1:number=0
  numbersecond1:number=0
  numberthird1:number=0


  constructor(){
    // this.employee=[

    //   {eid1:101, ename1:'Aadaarsh',salary1:6700000000},
    //   {eid1:102, ename1:'Pritam Da',salary1:8700000000},
    //   {eid1:103, ename1:'Sudharshan',salary1:860000000},
    //   {eid1:104, ename1:'Suraj',salary1:900000000}
    // ]

    this.movies=[

      {title:"Jawan",directorname:"Aadarsh",ticketprice:200, releasedate:"20-04-2023"},
      {title:"Cars",directorname:"Suraj",ticketprice:400, releasedate:"27-04-2021"},
      {title:"Race",directorname:"Yogesh",ticketprice:300, releasedate:"12-07-2022"},
      {title:"Bikers",directorname:"Abhishek",ticketprice:700, releasedate:"01-01-2024"}

    ]

    this.students=[
      {stud_id:1001,stud_name:"Aadarsh",mark:61},
      {stud_id:1002,stud_name:"Suraj",mark:71},
      {stud_id:1003,stud_name:"Shudarshan",mark:59},
      {stud_id:1004,stud_name:"Pritam",mark:64}

    ]

    this.employee2=[

      {eid:'emp101', ename:'Ronaldo', gender:'Male',salary:6700000000,birthdate:new Date(13/4/1998)},
      {eid:'emp102', ename:'Messi Da', gender:'Male',salary:8700000000, birthdate:new Date(16/5/1999)},
      {eid:'emp103', ename:'Suarez', gender:'Male',salary:860000000,birthdate:new Date(19/8/1991)},
      {eid:'emp104', ename:'Jordi',gender:'Female',salary:900000000,birthdate:new Date(21/11/1995) }
    ]

    this.games=[

      {name:"Witcher 3"},
      {name:"Witcher 2"},
      {name:"Witcher 1"}
    ]

  }


}
