import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  displayOverlyModel: boolean = false;
  isChrome: boolean = true;

  ngOnInit(): void {
    this.isChrome = navigator.userAgent.includes("Chrome");
  }

  showOverlyModel($event: boolean) {
    this.displayOverlyModel = true;
  }
  hideOverlyModel() {
    this.displayOverlyModel = false;
  }
}
