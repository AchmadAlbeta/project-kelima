import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-listalbeta',
  templateUrl: './shopping-listalbeta.component.html',
  styleUrls: ['./shopping-listalbeta.component.css']
})
export class ShoppingListalbetaComponent implements OnInit {

  ingredients:Ingredient[]=[
    new Ingredient('Apples',23),
    new Ingredient('tomato',10),
  ];

  constructor() { }

  ngOnInit() {
  }

  onIngredientAdded(ingredient:Ingredient){
    this.ingredients.push(ingredient);
  }

}
