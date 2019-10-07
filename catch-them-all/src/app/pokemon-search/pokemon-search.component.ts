import { Component, OnInit } from '@angular/core';
import { PokemonServiceService } from '../pokemon-service.service';

@Component({
  selector: 'app-pokemon-search',
  templateUrl: './pokemon-search.component.html',
  styleUrls: ['./pokemon-search.component.css']
})
export class PokemonSearchComponent implements OnInit {
  public pokemonList = [];

  constructor(private pokemonService: PokemonServiceService) { }

  ngOnInit() {
  }

  async catchPokemon(pokemon) {
    const pokemonData = await this.pokemonService.catch(pokemon);
    this.pokemonList.push(pokemonData);
  }
}
