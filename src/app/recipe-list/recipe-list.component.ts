import { Component } from '@angular/core';
import recipes from '../../../db.json';
import recipe from '../../../recipe.json';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent {
  recipesList: any[];
  Pages: any[] = [];

  isUserGenerated: boolean = false;
  hidePagenationButtonNext: boolean = true;
  hidePagenationButtonPrev: boolean = false;

  curPage: number = 0;
  prevPage: number = 0;
  nextPage: number = 2;

  constructor() {
    this.recipesList = recipes.recipes;

    var size = 10;
    for (var i = 0; i < this.recipesList.length; i += size) {
      this.Pages.push(this.recipesList.slice(i, i + size));
    }
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    // this.pages =
  }

  openRecipeHandler(item: any) {
    console.log(item.target);
  }

  prevPageHandler() {
    if (this.curPage == 1) {
      this.hidePagenationButtonPrev = false;
    } else if (this.curPage >= this.Pages.length - 2) {
      this.hidePagenationButtonNext = true;
    }
    this.curPage--;
    this.nextPage--;
    this.prevPage--;
  }

  nextPageHandler() {
    if (this.curPage == this.Pages.length - 2) {
      this.hidePagenationButtonNext = false;
    } else if (this.curPage >= 0) {
      this.hidePagenationButtonPrev = true;
    }
    this.curPage++;
    this.nextPage++;
    this.prevPage++;
  }
}
