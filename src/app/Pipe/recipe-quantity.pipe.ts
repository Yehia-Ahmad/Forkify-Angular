import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'recipeQuantity'
})
export class RecipeQuantityPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
