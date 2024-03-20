import { TestBed } from '@angular/core/testing';

import { Issuetracker13557Service } from './issuetracker13557.service';

describe('Issuetracker13557Service', () => {
  let service: Issuetracker13557Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Issuetracker13557Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
