import { TestBed, inject } from '@angular/core/testing';

import { TestDynamicModuleService } from './test-dynamic-module.service';

describe('TestDynamicModuleService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TestDynamicModuleService]
    });
  });

  it('should be created', inject([TestDynamicModuleService], (service: TestDynamicModuleService) => {
    expect(service).toBeTruthy();
  }));
});
