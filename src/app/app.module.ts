import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContainerComponent } from './container/container.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipePageComponent } from './recipe-page/recipe-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RecipeQuantityPipe } from './Pipe/recipe-quantity.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    RecipeListComponent,
    RecipePageComponent,
    RecipeQuantityPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
