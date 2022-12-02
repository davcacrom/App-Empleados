import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegistrarUsuarioComponent } from './registrar-usuario/registrar-usuario.component';



@NgModule({
  declarations: [
    LoginComponent,
    RegistrarUsuarioComponent
  ],
  imports: [
    CommonModule
  ]
})
export class UsuarioModule { }
