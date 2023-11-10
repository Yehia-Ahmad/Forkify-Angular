import { Component } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css'],
})
export class ContainerComponent {
  displayErrorMassage: boolean = false;
  displayBookmarkList: boolean = false;
  onMouseEnter() {
    this.displayBookmarkList = true;
    this.displayErrorMassage = true;
  }
  onMouseLeave() {
    this.displayBookmarkList = false;
    this.displayErrorMassage = false;
  }
}
