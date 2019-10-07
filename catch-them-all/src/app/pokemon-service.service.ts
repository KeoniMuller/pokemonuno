import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PokemonServiceService {

  private baseUrl = 'https://pokeapi.co/api/v2';
  private apiURL = 'http://localhost:3002/pokemon/party';

  constructor(private http: HttpClient) { }

  async catch(pokemon) {
    const pokemonData = await (this.http.get(`${this.baseUrl}/pokemon/${pokemon}/`).toPromise());
    return pokemonData;
  }

  async addParty(pokemon) {
    try {
      const poke =  {
        id: pokemon.id,
        name: pokemon.name,
        img: pokemon.sprites.front_default
      };
      const res = await (this.http.post(`${this.apiURL}`, { ...poke },  { responseType: 'text' }).toPromise());
      return res;
    } catch (e) {
      throw e;
    }
  }

  async getParty() {
    const res = await (this.http.get(`${this.apiURL}`).toPromise());
    return res;
  }
}
