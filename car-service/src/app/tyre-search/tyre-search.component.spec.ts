import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TyreSearchComponent } from './tyre-search.component';

describe('TyreSearchComponent', () => {
  let component: TyreSearchComponent;
  let fixture: ComponentFixture<TyreSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TyreSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TyreSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
