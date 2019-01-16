import { Component, OnInit } from '@angular/core';
import { Ingredient } from 'src/app/models/ingredient.model';
import * as ingredientData from 'src/mock/ingredients.json';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Array<Ingredient> = ingredientData.map(i => new Ingredient({...i}));
  constructor() { }

  ngOnInit() {
  }

}
