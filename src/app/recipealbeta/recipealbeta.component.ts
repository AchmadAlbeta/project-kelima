import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipealbeta',
  templateUrl: './recipealbeta.component.html',
  styleUrls: ['./recipealbeta.component.css']
})
export class RecipealbetaComponent implements OnInit {

  selectedRecipe:Recipe;

  constructor() { }

  ngOnInit() {
  }

}
