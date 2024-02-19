import { Component, OnInit } from '@angular/core';
import { MyHttpService } from '../my-http.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-my-http-use',
  standalone: true,
  imports: [CommonModule,HttpClientModule],
  providers:[MyHttpService],
  templateUrl: './my-http-use.component.html',
  styleUrl: './my-http-use.component.css'
})
export class MyHttpUseComponent implements OnInit{

  user:any
  constructor(public myclient:MyHttpService){}

  ngOnInit(): void {
    
    this.myclient.getData().subscribe((e:any)=>this.user=e.data)
    console.log(this.user)

  }
}

