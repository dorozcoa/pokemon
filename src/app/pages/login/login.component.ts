import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginModel } from '../../models/login.model';
import { SweetAlertService } from '../../services/sweet-alert.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public formGroup: FormGroup;
  public loginModel: LoginModel = new LoginModel();
  public recordarme: boolean = false;

  constructor(private builder: FormBuilder, private router: Router,
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

  }

  esValidoFormulario(): boolean {

    return this.formGroup.valid;
    
  }

}