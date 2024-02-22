import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MyHttp2Service } from '../my-http2.service';
import { ActivatedRoute, Route, Router, RouterModule, RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-emp-routs',
  standalone: true,
  imports: [CommonModule, HttpClientModule, RouterOutlet, RouterModule],
  providers: [MyHttp2Service,HttpClient],
  templateUrl: './emp-routs.component.html',
  styleUrl: './emp-routs.component.css'
})
export class EmpRoutsComponent implements OnInit {

  user: any []= []
  userdata: any=null
  
  constructor(public myclient:MyHttp2Service,public active:ActivatedRoute,public r:Router) //Ensure you are importing Router from '@angular/router' 
  {}

  ngOnInit(): void {

    let empcode = this.active.snapshot.params['id'];

    // this.mys.getData().subscribe((e:any)=>this.user=e.data)
    // let empcode=this.active.snapshot.params['id']
    // console.log(empcode)


    // for(let i=0;i<this.user.length;i++)
    // {
    //     console.log("hiiiii")
    //   if(empcode==this.user[i].id)
    //   {
    //     console.log("Helllo")
    //       this.userdata=this.user[i]
    //   }
    // }

    // console.log(this.userdata)
  }


  SaveMe() {
    this.myclient.getData().subscribe((e: any) => {
      this.user = e.data;
      
      let empcode = this.active.snapshot.params['id'];
  
      for (let u of this.user) {
        if (u.id == empcode) {
          this.userdata = u;
          break; // Assuming only one user matches the condition
        }
      }
    });
  }
    
  GoBack() {
    this.r.navigate(['/Home'])
  }
  
}
