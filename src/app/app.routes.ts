import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
//#Aqui abaixo temos a configuração das rotas
export const routes: Routes = [
    {
        path: "login",
        component: LoginComponent
    }
];
