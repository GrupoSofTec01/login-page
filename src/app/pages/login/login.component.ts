import { Component } from '@angular/core';
import { DefaultLoginLayoutComponent } from '../../componentes/default-login-layout/default-login-layout.component';

@Component({
  selector: 'app-login',
  standalone: true,
  //#Aqui abaixo temos algumas importações de arquivos necessários
  imports: [    
    DefaultLoginLayoutComponent
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

}
