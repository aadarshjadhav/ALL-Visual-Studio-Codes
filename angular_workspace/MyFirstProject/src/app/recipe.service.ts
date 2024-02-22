import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { recipe } from "../app/recipe-menu/recipe-menu.component";

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  url="http://localhost:3000/Recipes"
  
  constructor(public myClient:HttpClient) {

   }

   getData():Observable<any>{
    return this.myClient.get<any>(this.url);
   }

   addRecipe(newRecipe:recipe): Observable<recipe> {
    return this.myClient.post<recipe>(this.url, newRecipe);
  }
}
