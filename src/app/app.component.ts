import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  displayOverlyModel: boolean = false;

  showOverlyModel($event: boolean) {
    this.displayOverlyModel = true;
  }
  hideOverlyModel() {
    this.displayOverlyModel = false;
  }
}
