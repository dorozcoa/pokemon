import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsuarioModel } from '../../models/usuario.model';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { SweetAlertService } from '../../services/sweet-alert.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
 
  public formGroup: FormGroup;
  public usuarioModel: UsuarioModel = new UsuarioModel();
 
  constructor(private builder: FormBuilder, private _auth: AuthService, private router: Router,
    private _sa: SweetAlertService) { }
 
  ngOnInit() {
 
    this.crearFormulario();
 
  }
 
  crearFormulario() {
 
    this.formGroup = this.builder.group({
      email: [
        this.usuarioModel.email,
        [Validators.required, Validators.email]
      ],
      password: [
        this.usuarioModel.password,
        [Validators.required]
      ],
      nombre: [
        this.usuarioModel.nombre,
        [Validators.required]
      ]
    });
 
  }
 
  registrar() {
 
    this.usuarioModel = this.formGroup.value;
 
    this._auth.nuevoUsuario(this.usuarioModel)
      .subscribe(resp => {
 
        this.router.navigateByUrl('/home')
        
      }, (error) => {
 
        this._sa.mostrarAlerta(error.error.error.message, 'error');
 
      });
 
  }
 
  esValidoFormulario(): boolean {
 
    return this.formGroup.valid;
    
  }
 
}
