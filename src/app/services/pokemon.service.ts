import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment.prod';


@Injectable({
  providedIn: 'root'
})
export class PokemonService {


  apiUrl: string = environment.baseUrl;
  pokemones: any[];

  constructor(private _http: HttpClient) { }

  getQuery(query?: string) {

    const url = `${this.apiUrl}/${query} `;
    return this._http.get(url);

  }

  getPokemones() {

    return this.getQuery('pokemon')
      .pipe(map(data => this.pokemones = data['results']));

  }

  getPokemon(index: number) {
    return this.getQuery(`pokemon/${index}`)
      .pipe(map(data => data));
  }


}
