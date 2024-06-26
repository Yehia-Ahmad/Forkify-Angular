import { DisplayRecipeService } from './../Services/display-recipe.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { BookmarkService } from '../Services/bookmark.service';
import { APIService } from '../Services/api.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { map } from 'rxjs';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: [
    './container.component.css',
    '../recipe-list/recipe-list.component.css',
  ],
})
export class ContainerComponent implements OnInit {
  @Output() toggleValue = new EventEmitter<boolean>();

  searchForm = new FormGroup({
    searchInput: new FormControl<string | null | undefined>(
      '',
      Validators.required
    ),
  });

  displayBookmarkContainer: boolean = false;
  displayErrorMassage: boolean = false;

  imgUrl: string = '';
  publisher: string = '';
  title: string = '';
  id: string;

  public config: any;
  items: any[] = [];

  BookmarkList: any[] = [];

  constructor(
    private bookmarkService: BookmarkService,
    private displayRecipeService: DisplayRecipeService,
    private api: APIService
  ) { }

  ngOnInit(): void {
    this.updateRecipeListHandler('pizza');
  }

  openOverleyModelHandler(event: Event) {
    event.preventDefault();
    this.toggleValue.emit(true);
  }

  onSubmitHandler() {
    let term = this.searchForm.value.searchInput;
    this.updateRecipeListHandler(term);
    this.searchForm.reset();
  }

  updateRecipeListHandler(term: string | null | undefined) {
    this.api.updateRecipeList(term).subscribe((res: any) => {
      let recipes = res.data.recipes;
      this.displayRecipeService.newRecipeList.next(recipes);
    });
  }

  onMouseEnter() {
    this.displayBookmarkContainer = true;

    if (this.bookmarkService.FavoriteRecipes.length == 0) {
      this.displayErrorMassage = true;
    } else {
      // this.BookmarkList.splice(0, this.BookmarkList.length);
      // this.bookmarkService.FavoriteRecipes.map((item: any) => {
      //   this.imgUrl = item.imageUrl;
      //   this.publisher = item.publisher;
      //   this.title = item.title;
      //   this.id = item.id;
      // });

      this.BookmarkList = this.bookmarkService.FavoriteRecipes;

      // this.BookmarkList.push({
      //   imgUrl: this.imgUrl,
      //   title: this.title,
      //   publisher: this.publisher,
      //   id: this.id,
      // });
    }
  }
  onMouseLeave() {
    this.displayBookmarkContainer = false;
    this.displayErrorMassage = false;
  }

  openRecipeHandler(item: any) {
    this.api.getRecipe(item.target.id).subscribe((res: any) => {
      this.config = res.data.recipe;
      this.bookmarkService.newRecipe.next(this.config);
    });
  }
}
