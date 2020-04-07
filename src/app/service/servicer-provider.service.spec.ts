import { TestBed } from '@angular/core/testing';

import { ServicerProviderService } from './servicer-provider.service';

describe('ServicerProviderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServicerProviderService = TestBed.get(ServicerProviderService);
    expect(service).toBeTruthy();
  });
});
