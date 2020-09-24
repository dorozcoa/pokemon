import { Injectable } from '@angular/core';
import Swal, { SweetAlertIcon } from 'sweetalert2'


@Injectable({
  providedIn: 'root'
})
export class SweetAlertService {

  constructor() { }


  mostrarAlerta(mensaje: string, icon: SweetAlertIcon ) {

    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true
    })
    
    Toast.fire({
      icon: icon,
      title: mensaje
    })
    
  }

}
