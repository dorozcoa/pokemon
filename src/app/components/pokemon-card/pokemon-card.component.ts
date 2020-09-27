import { Component, Input, ɵConsole } from '@angular/core';
import { Router } from '@angular/router';
import { PokemonModel } from '../../models/pokemon.model';
import { FirebaseService } from '../../services/firebase.service';
import { SweetAlertService } from '../../services/sweet-alert.service';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.css']
})
export class PokemonCardComponent {

  @Input() pokemonModel: PokemonModel;

  constructor( private _router: Router, private _fbs: FirebaseService, 
    private _sa: SweetAlertService ) { }



  agregarFirebase( pokemon: PokemonModel ) {

    if ( pokemon.id ) {

      this._sa.mostrarAlerta('Este pokemon ya se encuentra en firebase', 'warning');
      return;
    }

    this._fbs.crearPokemon( pokemon )
      .subscribe( resp => {

      this._sa.mostrarAlerta('Pokemon creado en firebase', 'success');

    }, (error) => {

      this._sa.mostrarAlerta('error al crear pokemon en firebase', 'error');

      console.log(error)
    });

  }

  verDetalle( index: number ) {

    this._router.navigate([ '/detalle', index ]);

  }
  

}
