import { TestBed } from '@angular/core/testing';

import { UserCreateService } from './user-create.service';

describe('UserCreateServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserCreateService = TestBed.get(UserCreateService);
    expect(service).toBeTruthy();
  });
});
