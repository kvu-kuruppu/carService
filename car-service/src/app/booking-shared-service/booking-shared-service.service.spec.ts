import { TestBed } from '@angular/core/testing';

import { BookingSharedServiceService } from './booking-shared-service.service';

describe('BookingSharedServiceService', () => {
  let service: BookingSharedServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BookingSharedServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
