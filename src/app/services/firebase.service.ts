import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { map } from 'rxjs/operators'
import { PokemonModel } from '../models/pokemon.model';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  firebaseUrl: string = environment.firebaseUrl;

  constructor(private _http: HttpClient) { }

  crearPokemon(pokemon: PokemonModel) {

    return this._http.post(`${this.firebaseUrl}/pokemones.json`, pokemon)
      .pipe(
        map((resp: any) => {
          pokemon.id = resp.name;
          return pokemon;
        })
      );

  }


  getPokemonesFirebase() {

    return this._http.get(`${this.firebaseUrl}/pokemones.json`)
      .pipe(
        map(this.crearArreglo)
      );

  }

  deletePokemon( id: string) {

    return this._http.delete( `${this.firebaseUrl}/pokemones/${ id }.json` );

  }


  private crearArreglo(pokemonesObj: object) {

    const pokemones: PokemonModel[] = [];

    if (pokemonesObj === null) { return []; }

    Object.keys( pokemonesObj ).forEach( key => {

      const pokemon: PokemonModel = pokemonesObj[key];
      pokemon.id = key;

      pokemones.push( pokemon );

    });

    return pokemones;
  }

}
