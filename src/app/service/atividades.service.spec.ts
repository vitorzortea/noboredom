import { TestBed } from '@angular/core/testing';

import { AtividadesService } from './atividades.service';

describe('AtividadesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AtividadesService = TestBed.get(AtividadesService);
    expect(service).toBeTruthy();
  });
});
