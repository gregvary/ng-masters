import { TestBed, inject } from '@angular/core/testing';

import { OccasionService } from './occasion.service';

describe('OccasionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OccasionService]
    });
  });

  it('should be created', inject([OccasionService], (service: OccasionService) => {
    expect(service).toBeTruthy();
  }));
});
