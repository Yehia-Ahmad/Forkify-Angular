import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverleyModelComponent } from './overley-model.component';

describe('OverleyModelComponent', () => {
  let component: OverleyModelComponent;
  let fixture: ComponentFixture<OverleyModelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OverleyModelComponent]
    });
    fixture = TestBed.createComponent(OverleyModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
