import { Component } from '@angular/core';
import recipe from '../../../recipe.json';
// import recipeData from '../../../recipe.json';

@Component({
  selector: 'app-recipe-page',
  templateUrl: './recipe-page.component.html',
  styleUrls: ['./recipe-page.component.css'],
})
export class RecipePageComponent {
  ingredients: any = recipe.data.recipe.ingredients;
  title: string = recipe.data.recipe.title;
  publisher: string = recipe.data.recipe.publisher;
  imageUrl: string = recipe.data.recipe.image_url;
  sourceUrl: string = recipe.data.recipe.source_url;
  servings: number = recipe.data.recipe.servings;
  cookingTime: number = recipe.data.recipe.cooking_time;

  // recipe: object = {
  //   ingredients: recipeData.data.recipe.ingredients,
  //   title: recipeData.data.recipe.title,
  //   publisher: recipeData.data.recipe.publisher,
  //   imageUrl: recipeData.data.recipe.image_url,
  //   sourceUrl: recipeData.data.recipe.source_url,
  //   servings: recipeData.data.recipe.servings,
  //   cookingTime: recipeData.data.recipe.cooking_time,
  // };

  constructor() {
    // this.recipe = {
    //   ingredients: recipeData.data.recipe.ingredients,
    //   title: recipeData.data.recipe.title,
    //   publisher: recipeData.data.recipe.publisher,
    //   imageUrl: recipeData.data.recipe.image_url,
    //   sourceUrl: recipeData.data.recipe.source_url,
    //   servings: recipeData.data.recipe.servings,
    //   cookingTime: recipeData.data.recipe.cooking_time,
    // };
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    console.log(this.ingredients);
  }
}
