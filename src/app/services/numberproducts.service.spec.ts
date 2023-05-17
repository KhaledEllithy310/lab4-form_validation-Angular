import { TestBed } from '@angular/core/testing';

import { NumberproductsService } from './numberproducts.service';

describe('NumberproductsService', () => {
  let service: NumberproductsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NumberproductsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
