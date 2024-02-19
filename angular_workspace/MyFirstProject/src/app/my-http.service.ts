import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyHttpService {

  url="assets/UserData.json"

  constructor(public myhttpclient:HttpClient) {}

  getData(){

    return this.myhttpclient.get(this.url)
  }

}
