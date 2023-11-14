import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, config, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class APIService {
  constructor(private httpClient: HttpClient) {}

  getRecipe(id: any): Observable<JSON> {
    return this.httpClient.get<JSON>(
      `https://forkify-api.herokuapp.com/api/v2/recipes/${id}`
    );
  }

  updateRecipePage() {}

  // GET recipes whose name contains search term
  updateRecipeList(term?: String | null | undefined): Observable<JSON> {
    return this.httpClient.get<JSON>(
      `https://forkify-api.herokuapp.com/api/v2/recipes?search=${term}`
    );
  }
}
