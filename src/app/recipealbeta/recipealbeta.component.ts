import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipeService } from './recipe.service';


@Component({
  selector: 'app-recipealbeta',
  templateUrl: './recipealbeta.component.html',
  styleUrls: ['./recipealbeta.component.css'],
  providers: [RecipeService],
})
export class RecipealbetaComponent implements OnInit {

  selectedRecipe:Recipe;

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    this.recipeService.recipeSelected
    .subscribe(
      (recipe:Recipe)=>{
        this.selectedRecipe=recipe;
      }
    )
  }

}
