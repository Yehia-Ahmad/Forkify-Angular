import { config } from 'rxjs';
import { APIService } from '../Services/api.service';
import { BookmarkService } from './../Services/bookmark.service';
import { Component, OnChanges } from '@angular/core';

@Component({
  selector: 'app-recipe-page',
  templateUrl: './recipe-page.component.html',
  styleUrls: ['./recipe-page.component.css'],
})
export class RecipePageComponent {
  item: any;

  displayRecipe: boolean = false;
  customRecipe: boolean = false;
  isFavorite: boolean = false;
  recipeIsLoaded: boolean = true;

  constructor(
    private bookmarkService: BookmarkService,
    private api: APIService
  ) {
    // this.ingredients = recipe.data.recipe.ingredients;
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.isFavorite = false;

    this.bookmarkService.newRecipe.subscribe((config: any) => {
      this.displayRecipe = true;
      this.isFavorite = false;
      this.item = config.data.recipe;
    });

    setTimeout(() => {
      this.recipeIsLoaded = false;
    }, 100);
  }

  addFavoriteHandler(item: any) {
    this.isFavorite ? (this.isFavorite = false) : (this.isFavorite = true);
    console.log('recieved config from Bookmark icon: ', item.target.id);
    let id = item.target.id;
    this.api.getRecipe(id).subscribe((config: any) => {
      const favoriteRecipe: any = {
        title: config.data.recipe.title,
        publisher: config.data.recipe.publisher,
        imageUrl: config.data.recipe.image_url,
        id: config.data.recipe.id,
      };
      if (this.isFavorite) {
        this.bookmarkService.FavoriteRecipes.push(favoriteRecipe);
      }
      console.log(this.bookmarkService.FavoriteRecipes);
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
