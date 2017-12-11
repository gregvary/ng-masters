import { TestBed, inject } from '@angular/core/testing';

import { SplitService } from './split.service';

describe('SplitService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SplitService]
    });
  });

  it('should be created', inject([SplitService], (service: SplitService) => {
    expect(service).toBeTruthy();
  }));
});
