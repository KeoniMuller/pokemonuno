import { TestBed } from '@angular/core/testing';

import { PokemonServiceService } from './pokemon-service.service';
import { HttpClientModule } from '@angular/common/http';

describe('PokemonServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({
      imports: [
        HttpClientModule
      ]
    }).compileComponents());

  it('should be created', () => {
    const service: PokemonServiceService = TestBed.get(PokemonServiceService);
    expect(service).toBeTruthy();
  });

  it('should catch an existing pokemon', async () => {
    const service: PokemonServiceService = TestBed.get(PokemonServiceService);
    const pokemon: any = await service.catch('ditto');
    expect(pokemon.name).toBe('ditto');
  });

  it('should not catch an false pokemon', async () => {
    try {
      const service: PokemonServiceService = TestBed.get(PokemonServiceService);
      const pokemon = await service.catch('dittooo');
      console.log(pokemon);
    } catch (e) {
      console.log(e);
      expect(e.status).toBe(404);
    }
  });
});
