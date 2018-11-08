import { Injectable,EventEmitter } from '@angular/core';
import { Recipe } from '../recipealbeta/recipe.model';
import { Ingredient } from '../shopping-listalbeta/shopping-edit/ingredient.model';
import { ShoppingListService } from '../shopping-listalbeta/shopping-list.service';

@Injectable({
  providedIn: 'root'
})
@Injectable()
export class RecipeService {

  recipeSelected = new EventEmitter<Recipe>();

  private recipes:Recipe[]=[
    new Recipe('Burger',
      'A hamburger with a rim of lettuce sitting on a black plate against a black backgroung',
    'http://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',
    [
      new Ingredient('meal',1),
      new Ingredient('tomato',2)

    ]),
    new Recipe('special fried rice',
    'Fried rice is a dish of cooked rice that has been stir-fried in a wok or a' + 
    'frying pan and is usually mixed with other ingredient such as eggs, vegetables, seafood, or meat, It is ofthen eaten',
    '../src/app/img/Resep-Nasgor-sapi.jpg',
    [
      new Ingredient('rice',1),
      new Ingredient('meal',3),
      new Ingredient('egg',1)
    ]),
  ];

  getRecipes(){
    return this.recipes.slice();
  }

  addIngredientsShoppingList(ingredients: Ingredient[]){
    this.slsService.addIngredients(ingredients);
  }

constructor(private slsService: ShoppingListService) { }

}
