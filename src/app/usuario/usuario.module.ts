import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegistrarUsuarioComponent } from './registrar-usuario/registrar-usuario.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    LoginComponent,
    RegistrarUsuarioComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],exports:[
    LoginComponent,
    RegistrarUsuarioComponent
  ]
})
export class UsuarioModule { }
