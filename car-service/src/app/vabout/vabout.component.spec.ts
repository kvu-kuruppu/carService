import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VaboutComponent } from './vabout.component';

describe('VaboutComponent', () => {
  let component: VaboutComponent;
  let fixture: ComponentFixture<VaboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VaboutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VaboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
