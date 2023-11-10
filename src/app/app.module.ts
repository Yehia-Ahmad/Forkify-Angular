import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContainerComponent } from './container/container.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipePageComponent } from './recipe-page/recipe-page.component';

@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    RecipeListComponent,
    RecipePageComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
