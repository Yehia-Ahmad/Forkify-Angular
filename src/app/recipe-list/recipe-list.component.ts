import { DisplayRecipeService } from './../Services/display-recipe.service';
import { Component } from '@angular/core';
import { APIService } from '../Services/api.service';
import { BookmarkService } from '../Services/bookmark.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent {
  recipesList: any;
  Pages: any[] = [];

  isUserGenerated: boolean = false;
  hidePagenationButtonNext: boolean = true;
  hidePagenationButtonPrev: boolean = false;

  curPage: number = 0;
  prevPage: number = 0;
  nextPage: number = 2;
  config: any;

  constructor(
    private api: APIService,
    private bookmarkService: BookmarkService,
    private displayRecipeService: DisplayRecipeService
  ) {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.hidePagenationButtonNext = false;
    this.displayRecipeService.newRecipeList.subscribe((res) => {
      this.recipesList = res;
      this.sliceRecipeList(this.recipesList);
      if (this.Pages.length == 0) {
        this.hidePagenationButtonNext = false;
      } else {
        this.hidePagenationButtonNext = true;
      }
    });
  }

  sliceRecipeList(arr: any[]) {
    this.Pages.splice(0, this.Pages.length);
    var size = 10;
    for (var i = 0; i < arr.length; i += size) {
      this.Pages.push(arr.slice(i, i + size));
    }
  }

  openRecipeHandler(item: any) {
    this.api.getRecipe(item.target.id).subscribe((res: any) => {
      this.config = res;
      if (res != undefined) {
        this.bookmarkService.newRecipe.next(this.config);
      }
    });
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
