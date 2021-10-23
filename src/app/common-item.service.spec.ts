import { TestBed } from '@angular/core/testing';

import { CommonItemService } from './common-item.service';

describe('CommonItemService', () => {
  let service: CommonItemService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommonItemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
