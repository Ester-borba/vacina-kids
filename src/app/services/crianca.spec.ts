import { TestBed } from '@angular/core/testing';

import { Crianca } from './crianca';

describe('Crianca', () => {
  let service: Crianca;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Crianca);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
