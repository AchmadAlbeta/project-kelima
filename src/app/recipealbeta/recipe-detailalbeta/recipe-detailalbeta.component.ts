import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-detailalbeta',
  templateUrl: './recipe-detailalbeta.component.html',
  styleUrls: ['./recipe-detailalbeta.component.css']
})
export class RecipeDetailalbetaComponent implements OnInit {
  @Input() recipe:Recipe;

  constructor() { }

  ngOnInit() {
  }

}
