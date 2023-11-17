import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-overley-model',
  templateUrl: './overley-model.component.html',
  styleUrls: ['./overley-model.component.css'],
})
export class OverleyModelComponent {
  @Output() hideOverlyModel = new EventEmitter<boolean>();

  uploadForm = new FormGroup({
    title: new FormControl(''),
    sourceUrl: new FormControl(''),
    image: new FormControl(''),
    publisher: new FormControl(''),
    cookingTime: new FormControl(''),
    servings: new FormControl(''),
    Ingredients: new FormGroup({
      ingredient_1: new FormControl(''),
      ingredient_2: new FormControl(''),
      ingredient_3: new FormControl(''),
      ingredient_4: new FormControl(''),
      ingredient_5: new FormControl(''),
      ingredient_6: new FormControl(''),
    }),
  });

  closeOverlyModelHandler() {
    this.hideOverlyModel.emit(false);
  }

  uploadRecipeHandler() {}
}
