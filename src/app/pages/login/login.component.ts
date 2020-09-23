import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginModel } from '../../models/login.model';
import { SweetAlertService } from '../../services/sweet-alert.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public formGroup: FormGroup;
  public loginModel: LoginModel = new LoginModel();
  public recordarme: boolean = false;

  constructor(private builder: FormBuilder, private _auth: AuthService, private router: Router,
    private _sa: SweetAlertService ) { }


  ngOnInit() {
    this.crearFormulario();

    if (localStorage.getItem('email')) {
      this.loginModel.email = localStorage.getItem('email');
      this.recordarme = true;
    }

  }

  crearFormulario() {

    this.formGroup = this.builder.group({
      email: [
        this.loginModel.email,
        [Validators.required, Validators.email]
      ],
      password: [
        this.loginModel.password,
        [Validators.required]
      ]
    });

  }

  login() {

    this.loginModel = this.formGroup.value;

    this._auth.login(this.loginModel)
      .subscribe(resp => {

        if (this.recordarme) {
          localStorage.setItem('email', this.loginModel.email)
        }

        this.router.navigateByUrl('/home')

      }, (error) => {

        this._sa.mostrarAlerta('Error al iniciar sesion', 'error');
       
      });

  }

  esValidoFormulario(): boolean {

    return this.formGroup.valid;
    
  }

}