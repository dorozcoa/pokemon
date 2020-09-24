import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonService } from '../../services/pokemon.service';
import { PokemonDetalleModel } from '../../models/pokemon-detalle.model';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})

export class DetalleComponent {

  detalle: PokemonDetalleModel = new PokemonDetalleModel();

  constructor(private _route: ActivatedRoute, private _ps: PokemonService) {

    this._route.params.subscribe(params => {

      this.getPokemon(params['id'])

    });

  }


  getPokemon(index: number) {

    this._ps.getPokemon(index)
      .subscribe((resp: any) => {

        this.detalle.index = index;
        this.detalle.imagen = resp.sprites.front_default;
        this.detalle.nombre = resp.name;
        this.detalle.movimientos = resp.moves.length;
        this.detalle.experiencia = resp.base_experience;
        this.detalle.habilidades = resp.abilities.length;
        this.detalle.tipo = resp.types[0].type.name;

      })

  }


}
