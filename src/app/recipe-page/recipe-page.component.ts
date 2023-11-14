import { BookmarkService } from './../Services/bookmark.service';
import { Component, OnChanges } from '@angular/core';
import recipe from '../../../recipe.json';

@Component({
  selector: 'app-recipe-page',
  templateUrl: './recipe-page.component.html',
  styleUrls: ['./recipe-page.component.css'],
})
export class RecipePageComponent implements OnChanges {
  // ingredients: any = recipe.data.recipe.ingredients;
  // title: string = recipe.data.recipe.title;
  // publisher: string = recipe.data.recipe.publisher;
  // imageUrl: string = recipe.data.recipe.image_url;
  // sourceUrl: string = recipe.data.recipe.source_url;
  // servings: number = recipe.data.recipe.servings;
  // cookingTime: number = recipe.data.recipe.cooking_time;
  item: any;

  displayRecipe: boolean = false;
  customRecipe: boolean = false;
  isFavorite: boolean = false;
  recipeIsLoaded: boolean = true;

  constructor(private bookmarkService: BookmarkService) {
    // this.ingredients = recipe.data.recipe.ingredients;
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.isFavorite = false;

    this.bookmarkService.newRecipe.subscribe((config: any) => {
      this.displayRecipe = true;
      this.item = config.data.recipe;
      this.bookmarkService.FavoriteRecipes.map((item: any) => {
        console.log('favorite Item: ' + item);
      });
    });

    setTimeout(() => {
      this.recipeIsLoaded = false;
    }, 100);
  }

  ngOnChanges(): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
  }

  addFavoriteHandler() {
    this.isFavorite ? (this.isFavorite = false) : (this.isFavorite = true);
    this.bookmarkService.newRecipe.subscribe((config: any) => {
      const favoriteRecipe: any = {
        title: config.data.recipe.title,
        publisher: config.data.recipe.publisher,
        imageUrl: config.data.recipe.image_url,
        id: config.data.recipe.id,
      };
      console.log('recieved config from Bookmark icon: ', favoriteRecipe);
      if (this.isFavorite) {
        this.bookmarkService.FavoriteRecipes.push(favoriteRecipe);
      }
    });
  }

  decreamentServingsHandler() {
    if (this.item.servings != 1) {
      this.item.servings--;
      this.item.ingredients.map((item: any) => {
        if (item.quantity) {
          item.quantity = item.quantity - 0.25;
        }
      });
    }
  }
  increamentServingsHandler() {
    this.item.servings++;
    this.item.ingredients.map((item: any) => {
      if (item.quantity) {
        item.quantity = item.quantity + 0.25;
      }
    });
  }
}
