import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule, RouterOutlet } from '@angular/router';
import { MyhttpmovieService } from '../myhttpmovie.service';
import { resourceUsage } from 'process';

@Component({
  selector: 'app-my-http-use-movie',
  standalone: true,
  imports:[CommonModule,HttpClientModule,RouterModule,RouterOutlet,ReactiveFormsModule],
  providers: [MyhttpmovieService,HttpClient],
  templateUrl: './my-http-use-movie.component.html',
  styleUrl: './my-http-use-movie.component.css'
})
export class MyHttpUseMovieComponent implements OnInit{
 
 
  user:any
  movieform!:FormGroup
  isupdate!:boolean

  constructor(public myclient:MyhttpmovieService, public fb:FormBuilder)
  {

  }

  ngOnInit(): void {
    
    this.getAllMovie()

    this.movieform=this.fb.group({

      id:[,Validators.required],
      moviename:[,Validators.required],
      ticketprice:[,Validators.required]
    })
  }

  getAllMovie()
  {
    this.myclient.getData().subscribe(result=>{this.user=result})
  }

  get id()
  {
    return this.movieform.get('id')
  }

  get moviename()
  {
    return this.movieform.get('moviename')
  }

  get ticketprice()
  {
    return this.movieform.get('ticketprice')
  }

}
