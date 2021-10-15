import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterServiceComponent } from './footer-service.component';

describe('FooterServiceComponent', () => {
  let component: FooterServiceComponent;
  let fixture: ComponentFixture<FooterServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterServiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
