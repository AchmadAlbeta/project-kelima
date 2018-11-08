import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detailalbeta',
  templateUrl: './recipe-detailalbeta.component.html',
  styleUrls: ['./recipe-detailalbeta.component.css']
})
export class RecipeDetailalbetaComponent implements OnInit {
  @Input() recipe:Recipe;

  constructor(private recipeService:RecipeService) { }

  ngOnInit() {
  }

  onAddShoppingList(){
    this.recipeService.addIngredientsShoppingList(this.recipe.ingredient);
  }

}
