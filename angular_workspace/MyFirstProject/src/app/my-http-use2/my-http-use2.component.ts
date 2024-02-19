import { Component, OnInit } from '@angular/core';
import { MyHttp2Service } from '../my-http2.service';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-my-http-use2',
  standalone: true,
  imports: [CommonModule,HttpClientModule,RouterModule,RouterOutlet],
  providers:[MyHttp2Service, HttpClient],
  templateUrl: './my-http-use2.component.html',
  styleUrl: './my-http-use2.component.css'
})
export class MyHttpUse2Component implements OnInit{

  user:any
  constructor(public myclient:MyHttp2Service){}

  ngOnInit(): void {

    this.myclient.getData().subscribe((e:any)=>this.user=e.data)
    
    console.log(this.user);
  }

  

}
