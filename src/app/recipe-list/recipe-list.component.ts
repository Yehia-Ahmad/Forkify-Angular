import { Component } from '@angular/core';
import recipes from '../../../db.json';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent {
  recipesList: any[];
  arrayOfArrays: any[] = [];
  pages: any[] = [];

  hidePagenationButtonPrev: boolean = false;
  hidePagenationButtonNext: boolean = true;

  curPage: number = 0;
  prevPage: number = 0;
  nextPage: number = 2;

  constructor() {
    this.recipesList = recipes.recipes;
    console.log(this.recipesList.length);

    var size = 10;
    for (var i = 0; i < this.recipesList.length; i += size) {
      this.arrayOfArrays.push(this.recipesList.slice(i, i + size));
    }
    console.log(this.arrayOfArrays);
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.pages = this.arrayOfArrays.map((item, i) => {
      return {
        page: item,
      };
    });
    console.log(this.pages.length);
  }

  prevPageHandler() {
    if (this.curPage == 1) {
      this.hidePagenationButtonPrev = false;
    } else if (this.curPage >= this.pages.length - 2) {
      this.hidePagenationButtonNext = true;
    }
    this.curPage--;
    this.nextPage--;
    this.prevPage--;
  }

  nextPageHandler() {
    if (this.curPage == this.pages.length - 2) {
      this.hidePagenationButtonNext = false;
    } else if (this.curPage >= 0) {
      this.hidePagenationButtonPrev = true;
    }
    this.curPage++;
    this.nextPage++;
    this.prevPage++;
  }
}
