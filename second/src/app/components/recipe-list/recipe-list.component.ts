import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/app/models/recipe.model';
import * as recipesData from 'src/mock/recipes.json';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Array<Recipe> = recipesData.map(r => new Recipe({...r}));
   
  constructor() {  }

  ngOnInit() {
  }
}

