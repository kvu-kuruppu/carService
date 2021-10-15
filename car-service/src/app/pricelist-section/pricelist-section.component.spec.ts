import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PricelistSectionComponent } from './pricelist-section.component';

describe('PricelistSectionComponent', () => {
  let component: PricelistSectionComponent;
  let fixture: ComponentFixture<PricelistSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PricelistSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PricelistSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
