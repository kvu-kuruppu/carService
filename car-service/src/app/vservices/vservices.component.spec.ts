import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VservicesComponent } from './vservices.component';

describe('VservicesComponent', () => {
  let component: VservicesComponent;
  let fixture: ComponentFixture<VservicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VservicesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VservicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
