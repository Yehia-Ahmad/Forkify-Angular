import { TestBed } from '@angular/core/testing';

import { DisplayRecipeService } from './display-recipe.service';

describe('DisplayRecipeService', () => {
  let service: DisplayRecipeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DisplayRecipeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
