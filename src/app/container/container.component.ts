import { Component } from '@angular/core';
import recipe from '../../../recipe.json';
import { BookmarkService } from '../Services/bookmark.service';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: [
    './container.component.css',
    '../recipe-list/recipe-list.component.css',
  ],
})
export class ContainerComponent {
  displayBookmarkContainer: boolean = false;
  displayErrorMassage: boolean = false;

  imgUrl: string = '';
  publisher: string = '';
  title: string = '';
  id: number;

  BookmarkList: any[] = [];

  constructor(private bookmarkService: BookmarkService) {}

  onMouseEnter() {
    this.displayBookmarkContainer = true;

    if (this.bookmarkService.FavoriteRecipes.length == 0) {
      this.displayErrorMassage = true;
    } else {
      this.BookmarkList.splice(-1);
      this.bookmarkService.FavoriteRecipes.map((item: any) => {
        this.imgUrl = item.imageUrl;
        this.publisher = item.publisher;
        this.title = item.title;
        this.id = item.id;

        this.BookmarkList.push({
          imgUrl: this.imgUrl,
          title: this.title,
          publisher: this.publisher,
          id: this.id,
        });
      });
    }
  }
  onMouseLeave() {
    this.displayBookmarkContainer = false;
    this.displayErrorMassage = false;
  }

  openRecipeHandler(item: any) {
    console.log(item.target.id);
  }
}
