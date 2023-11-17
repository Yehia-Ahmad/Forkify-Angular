import { Injectable, SimpleChanges } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BookmarkService {
  FavoriteRecipes: any[] = [];
  // newRecipe: Subject<any[]> = new Subject();
  newRecipe = new BehaviorSubject({});
  constructor() {}
}
