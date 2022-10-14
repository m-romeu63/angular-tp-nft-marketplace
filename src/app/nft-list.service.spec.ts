import { TestBed } from '@angular/core/testing';

import { NftListService } from './nft-list.service';

describe('NftListService', () => {
  let service: NftListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NftListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
