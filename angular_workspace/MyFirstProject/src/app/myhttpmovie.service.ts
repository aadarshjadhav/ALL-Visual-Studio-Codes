import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError,throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyhttpmovieService {

  url="http://localhost:3000/moviedata"

  constructor(public myhttpclient:HttpClient) { }

  getData()
  {
    return this.myhttpclient.get(this.url)
  }

  deleteData(id:any):Observable<any>
  {
    return this.myhttpclient.delete<any>(this.url+"/"+id).pipe(
      catchError(this.errorHandler)
    )
  }

  saveData(movie:any):Observable<any>
  {
    let movie_data={id:movie.id,moviename:movie.moviename,ticketprice:movie.ticketprice}

    return this.myhttpclient.post<any>(this.url,movie_data).pipe(
      catchError(this.errorHandler)
    )
  }

  public updateMovie(id:any, movie:any):Observable<any>{

    return this.myhttpclient.put<any>(`${this.url}/${id}`,movie).pipe(

      catchError(this.errorHandler)
      )
  }

  errorHandler(error:any)
  {
    let errorMessage=""

    if(error.error instanceof ErrorEvent)
    {
      errorMessage=error.error.message
    }
    else{

      errorMessage=`Error Code: ${error.status} \n Message:${error.message}`
    }

    return throwError(()=> new Error(errorMessage))

  }
  
}
