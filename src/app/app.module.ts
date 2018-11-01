import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderalbetaComponent } from './headeralbeta/headeralbeta.component';
import { RecipealbetaComponent } from './recipealbeta/recipealbeta.component';
import { ShoppingListalbetaComponent } from './shopping-listalbeta/shopping-listalbeta.component';


import { RecipeListComponent } from './recipealbeta/recipe-list/recipe-list.component';
import { RecipeDetailalbetaComponent } from './recipealbeta/recipe-detailalbeta/recipe-detailalbeta.component';

import { RecipeItemComponent } from './recipealbeta/recipe-list/recipe-item/recipe-item.component';

import { ShoppingEditComponent } from './shopping-listalbeta/shopping-edit/shopping-edit.component';
import { FooterAlbetaComponent } from './FooterAlbeta/FooterAlbeta.component';
import { DropdownDirective } from './shared/dropdown.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderalbetaComponent,
    RecipealbetaComponent,
    ShoppingListalbetaComponent,

    RecipeListComponent,
    RecipeDetailalbetaComponent,
    RecipeItemComponent,
    ShoppingEditComponent,
    FooterAlbetaComponent,
    DropdownDirective
],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
