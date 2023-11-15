import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, config, map, retry } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class APIService {
  constructor(private httpClient: HttpClient) {}
  getRecipe(id: any) {
    return this.httpClient
      .get(`https://forkify-api.herokuapp.com/api/v2/recipes/${id}`)
      .pipe(
        retry(25),
        catchError(async (res) => {
          console.log(res.status);
          alert('something Went wrong Please Try Again');
        })
      );
  }

  // GET recipes whose name contains search term
  updateRecipeList(term?: String | null | undefined): Observable<JSON> {
    return this.httpClient.get<JSON>(
      `https://forkify-api.herokuapp.com/api/v2/recipes?search=${term}`
    );
  }
  postFavoriteRecipe() {}
}
