import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterText'
})
export class FilterTextPipe implements PipeTransform {

  transform(value: any, args: any): any {
    
    if (!args) return value;

    const resultado = [];

    value.filter(x => {
      if (x.indexOf(args) > -1) {
        resultado.push(x);
      }
    })

    return resultado;

  }

}
