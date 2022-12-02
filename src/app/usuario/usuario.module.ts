import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegistrarUsuarioComponent } from './registrar-usuario/registrar-usuario.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    LoginComponent,
    RegistrarUsuarioComponent
  ],
  exports:[
    LoginComponent,
    RegistrarUsuarioComponent
  ],
  imports: [
    CommonModule,
    FormModule,
    RouterModule
  ]
})
export class UsuarioModule { }
