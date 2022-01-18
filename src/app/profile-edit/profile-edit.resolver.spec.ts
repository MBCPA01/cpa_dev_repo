import { TestBed } from '@angular/core/testing';

import { ProfileEditResolver } from './profile-edit.resolver';

describe('ProfileEditResolver', () => {
  let resolver: ProfileEditResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(ProfileEditResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
