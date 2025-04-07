import { TestBed } from '@angular/core/testing';

import { AuthBooleanService } from './auth-boolean.service';

describe('AuthBooleanService', () => {
  let service: AuthBooleanService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthBooleanService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
