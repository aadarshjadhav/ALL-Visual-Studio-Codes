import { Component } from '@angular/core';
import { RecipeService } from '../recipe.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-recipe-menu',
  standalone: true,
  imports: [CommonModule,FormsModule,HttpClientModule],
  providers:[RecipeService],
  templateUrl: './recipe-menu.component.html',
  styleUrl: './recipe-menu.component.css'
})
export class RecipeMenuComponent {
  
  
  Recipes: recipe[] = [];
  newRecipe: recipe = { id: 0, name: '', time: '', details: '', img: '' };

  showForm: boolean = false;


  constructor(public myser:RecipeService){


  }
  ngOnInit(): void {

  this.getAllRecipes();
  }


  getAllRecipes() {
    
    this.myser.getData().subscribe(result=>{
      this.Recipes=result
     
    })
  }

  selectedItem: any | null = null;

  selectItem(itemName: string) {
    this.selectedItem = this.Recipes.find(recipe => recipe.name.toLowerCase() === itemName.toLowerCase());
  }

  clearSelection() {
    this.selectedItem = null;
  }

  addRecipe() {

    const maxId = this.Recipes.reduce((max, item) => (item.id > max ? item.id : max), 0);
    this.newRecipe.id = +maxId + 1; // Ensure maxId is treated as a number
    this.myser.addRecipe(this.newRecipe).subscribe(() => {
      this.getAllRecipes(); // Refresh recipes after adding
      this.newRecipe = { id: maxId + 1, name: '', time: '', details: '', img: '' }; // Assign the next ID  
      });
  }

  toggleForm() {
    this.showForm = !this.showForm; // Toggle form visibility
  }
}



export interface recipe{
  id: number;
  name:string;
  time:string;
  details:string;
  img:string

}

