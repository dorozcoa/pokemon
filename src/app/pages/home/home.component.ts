import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { PokemonService } from '../../services/pokemon.service';
import { PokemonModel } from 'src/app/models/pokemon.model';
import { SweetAlertService } from '../../services/sweet-alert.service';
import { FormControl } from '@angular/forms';
import { FirebaseService } from '../../services/firebase.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  pokemones: PokemonModel[] = [];
  pokemonesFireBase: PokemonModel[] = [];

  cantidadPokemones: number = 20;
  options: string[] = [];
  search: string = '';

  constructor(private _ps: PokemonService, private _fbs: FirebaseService,
    private _sa: SweetAlertService) { }



  ngOnInit() {

    if (this.pokemones.length === 0) {
      this.getPokemones();
    }

  }


  getPokemones() {

    for (let i = 1; i <= this.cantidadPokemones; i++) {

      this._ps.getPokemon(i)
        .subscribe((resp: any) => {

          let pokemon: PokemonModel = new PokemonModel();
          pokemon.index = i;
          pokemon.imagen = resp.sprites.front_default;
          pokemon.nombre = resp.name;
          this.pokemones.push(pokemon);
          this.options.push(pokemon.nombre);

        }, (error) => {

          this._sa.mostrarAlerta('Error al cargar los pokemones', 'error');
          console.log(error);

        });

    }

  }


  getPokemonesFirebase(e: any) {

    if (e.index === 1) {

      this._fbs.getPokemonesFirebase().subscribe(resp => {
        this.pokemonesFireBase = resp;
      })

    }

  }


  eliminarPokemon(pokemon: PokemonModel) {

    let indexFireBase = this.pokemonesFireBase.findIndex(x => x.id == pokemon.id);
    this.pokemonesFireBase.splice(indexFireBase, 1);

    this.pokemones.filter( x => {
      if (x.id === pokemon.id) {
        x.id = null; 
      }
    })

  }


}
