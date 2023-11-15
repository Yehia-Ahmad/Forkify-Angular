import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-overley-model',
  templateUrl: './overley-model.component.html',
  styleUrls: ['./overley-model.component.css'],
})
export class OverleyModelComponent {
  @Output() hideOverlyModel = new EventEmitter<boolean>();

  closeOverlyModelHandler() {
    this.hideOverlyModel.emit(false);
  }

  uploadRecipeHandler() {}
}
