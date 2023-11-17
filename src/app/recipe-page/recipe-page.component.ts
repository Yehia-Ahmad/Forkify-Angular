import { APIService } from '../Services/api.service';
import { BookmarkService } from './../Services/bookmark.service';
import { Component } from '@angular/core';

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
  ) {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.isFavorite = false;

    this.bookmarkService.newRecipe.subscribe((config: any) => {
      this.displayRecipe = true;

      let isIncludeInFavorite = this.bookmarkService.FavoriteRecipes.map(
        (elme: any) => {
          return elme.title == config.title;
        }
      );
      console.log(isIncludeInFavorite[0]);
      if (isIncludeInFavorite[0]) {
        this.isFavorite = true;
      } else {
        this.isFavorite = false;
      }
      if (config.length == 0) {
        return;
      }
      this.item = config;
    });

    setTimeout(() => {
      this.recipeIsLoaded = false;
      this.displayRecipe = false;
    }, 1000);
  }

  addFavoriteHandler() {
    let value = this.bookmarkService.newRecipe.getValue();
    if (!this.isFavorite) {
      this.isFavorite = true;
      this.bookmarkService.FavoriteRecipes.push(value);
    } else if (this.isFavorite) {
      this.isFavorite = false;
      this.bookmarkService.FavoriteRecipes.pop();
    }
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
