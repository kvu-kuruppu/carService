import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VpricelistComponent } from './vpricelist.component';

describe('VpricelistComponent', () => {
  let component: VpricelistComponent;
  let fixture: ComponentFixture<VpricelistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VpricelistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VpricelistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
