import { BookmarkService } from './../Services/bookmark.service';
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

  customRecipe: boolean = false;
  isFavorite: boolean = false;

  constructor(private bookmarkService: BookmarkService) {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    const favoriteRecipe: any = {
      title: recipe.data.recipe.title,
      publisher: recipe.data.recipe.publisher,
      imageUrl: recipe.data.recipe.image_url,
    };

    if (this.isFavorite) {
      this.bookmarkService.FavoriteRecipes.push(favoriteRecipe);
      console.log(this.bookmarkService.FavoriteRecipes);
    }
  }

  addFavoriteHandler() {
    this.isFavorite ? (this.isFavorite = false) : (this.isFavorite = true);
  }
}
