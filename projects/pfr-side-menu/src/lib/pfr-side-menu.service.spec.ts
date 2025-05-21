import { TestBed } from '@angular/core/testing';

import { PfrSideMenuService } from './pfr-side-menu.service';

describe('PfrSideMenuService', () => {
  let service: PfrSideMenuService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PfrSideMenuService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
