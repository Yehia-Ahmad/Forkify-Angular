import { Component } from '@angular/core';
import recipe from '../../../recipe.json';

@Component({
  selector: 'app-recipe-page',
  templateUrl: './recipe-page.component.html',
  styleUrls: ['./recipe-page.component.css'],
})
export class RecipePageComponent {
  ingredients: Object[] = recipe.data.recipe.ingredients;
  title: string = recipe.data.recipe.title;
  publisher: string = recipe.data.recipe.publisher;
  imageUrl: string = recipe.data.recipe.image_url;
  sourceUrl: string = recipe.data.recipe.source_url;
  servings: number = recipe.data.recipe.servings;
  cookingTime: number = recipe.data.recipe.cooking_time;

  constructor() {}
}
