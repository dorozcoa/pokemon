import { Component, Input, Output, EventEmitter } from '@angular/core';
import { PokemonModel } from '../../models/pokemon.model';
import { FirebaseService } from '../../services/firebase.service';
import { SweetAlertService } from '../../services/sweet-alert.service';

@Component({
  selector: 'app-pokemon-card-firebase',
  templateUrl: './pokemon-card-firebase.component.html',
  styleUrls: ['./pokemon-card-firebase.component.css']
})
export class PokemonCardFirebaseComponent  {

  @Input() pokemonModel: PokemonModel;
  @Output() eliminarPokemonEvent = new EventEmitter<PokemonModel>();

  constructor(private _fbs: FirebaseService, 
    private _sa: SweetAlertService ) { }

    eliminarFireBase( pokemon: PokemonModel ) {
      
      this._fbs.deletePokemon( pokemon.id )
      .subscribe( resp => {

        this._sa.mostrarAlerta('Pokemon eliminado de firebase', 'success');
        this.eliminarPokemonEvent.emit( pokemon );

      }, (error) => {

        this._sa.mostrarAlerta('Error al eliminar el pokemon', 'error');
        console.log(error);

      })

    }

}
