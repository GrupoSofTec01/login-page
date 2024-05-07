import { Component } from '@angular/core';
import { DefaultLoginLayoutComponent } from '../../componentes/default-login-layout/default-login-layout.component';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  //#Aqui abaixo temos algumas importações de arquivos necessários
  imports: [    
    DefaultLoginLayoutComponent,
    //#Aqui abaixo temos a importaçao de uma super classe
    ReactiveFormsModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  //#Aqui abaixo temos uma declaração da estrutura de um formulário.
  loginForm!: FormGroup;
  //#Aqui abaixo temos a estruturação de seu construtor
  constructor(){
    //#Aqui abaixo temos a criação de uma objeto "loginForm" da classe "FormGroup",
    //#que implementará o nosso formulário
    this.loginForm = new FormGroup({
      //#Aqui abaixo temos a regra dos campos do formulário
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    })
  }
}
