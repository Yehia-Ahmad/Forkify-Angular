import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'recipeQuantity',
})
export class RecipeQuantityPipe implements PipeTransform {
  transform(value: number): unknown {
    let check = Number.isInteger(value);
    if (!check && value != null) {
      let decimal = value - Math.floor(value);

      if (Math.floor(value) != 0) {
        if (decimal == 0.25) {
          return Math.floor(value) + ' 1/4';
        } else if (decimal == 0.5) {
          return Math.floor(value) + ' 1/2';
        } else if (decimal == 0.75) {
          return Math.floor(value) + ' 3/4';
        }
      } else if (Math.floor(value) == 0) {
        if (decimal == 0.25) {
          return ' 1/4';
        } else if (decimal == 0.5) {
          return ' 1/2';
        } else if (decimal == 0.75) {
          return ' 3/4';
        }
      }
    }
    return value;
  }
}
