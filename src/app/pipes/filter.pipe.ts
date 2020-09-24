import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any[], args: any): any {

    if (!args) return value;

    const resultado = [];

    value.filter(x => {
      if (x.nombre.indexOf(args) > -1) {
        resultado.push(x);
      }
    })

    return resultado;

  }

}
