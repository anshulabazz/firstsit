import { TestBed } from '@angular/core/testing';

import { FirebaseauthserviceService } from './firebaseauthservice.service';

describe('FirebaseauthserviceService', () => {
  let service: FirebaseauthserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FirebaseauthserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
