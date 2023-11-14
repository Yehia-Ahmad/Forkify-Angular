import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DisplayRecipeService {
  newRecipeList: Subject<any[]> = new Subject();

  constructor() {}
}
