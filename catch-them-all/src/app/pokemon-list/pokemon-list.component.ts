import { Component, OnInit, Input } from '@angular/core';
import { PokemonServiceService } from '../pokemon-service.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {
  @Input() pokemonList: Array<any>;
  pokemonParty: any;

  constructor(private pokemonService: PokemonServiceService) {
  }

  async ngOnInit() {
    this.pokemonParty = await this.pokemonService.getParty();
    console.log(this.pokemonParty);
  }

  async addToParty(pokemon) {
    try {
      await this.pokemonService.addParty(pokemon);
      this.pokemonParty = await this.pokemonService.getParty();
      console.log(this.pokemonParty);
    } catch (e) {
      return;
    }
  }

}
