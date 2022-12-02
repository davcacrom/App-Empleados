import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './rutas/app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { UsuarioModule } from './usuario/usuario.module';
import { ClienteModule } from './cliente/cliente.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    UsuarioModule,
    ClienteModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
