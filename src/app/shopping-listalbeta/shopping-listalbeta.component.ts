import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-listalbeta/shopping-list.service'

@Component({
  selector: 'app-shopping-listalbeta',
  templateUrl: './shopping-listalbeta.component.html',
  styleUrls: ['./shopping-listalbeta.component.css']
})
export class ShoppingListalbetaComponent implements OnInit {

  ingredients:Ingredient[]
  //=[
  //  new Ingredient('Apples',23),
  //  new Ingredient('tomato',10),
  //];

  constructor(private slsService:ShoppingListService) { }

  ngOnInit() {
    this.ingredients=this.slsService.getIngredient();
    this.slsService.IngredientChange
    .subscribe(
      (Ingredient:Ingredient[])=>{
        this.ingredients=Ingredient;
      }
    )
  }

  //onIngredientAdded(ingredient:Ingredient){
  //  this.ingredients.push(ingredient);
  //}

}
