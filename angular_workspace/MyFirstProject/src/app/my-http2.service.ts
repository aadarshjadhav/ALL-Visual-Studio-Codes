import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyHttp2Service {

  url="https://reqres.in/api/users?page=2"

  constructor(public myhttpclient:HttpClient) {

  }

  getData()
    {
      return this.myhttpclient.get(this.url)
    }

 

}
