import { TestBed } from '@angular/core/testing';

import { CatalogSearchService } from './catalog-search.service';

describe('CatalogSearchService', () => {
  let service: CatalogSearchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CatalogSearchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
