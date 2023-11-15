import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, config, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class APIService {
  constructor(private httpClient: HttpClient) {}
  // : Observable<JSON>
  getRecipe(id: any) {
    return this.httpClient
      .get(`https://forkify-api.herokuapp.com/api/v2/recipes/${id}`)
      .pipe(
        catchError(async (res) => {
          console.log(res.error.status);
          alert('something Went wrong Please Try Again');
        })
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
