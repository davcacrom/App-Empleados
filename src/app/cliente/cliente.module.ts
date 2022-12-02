import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrarClienteComponent } from './registrar-cliente/registrar-cliente.component';
import { ListaComponent } from './lista/lista.component';
import { VerClienteComponent } from './ver-cliente/ver-cliente.component';
import { FormularioClienteComponent } from './components/formulario-cliente/formulario-cliente.component';
import { EditClienteComponent } from './edit-cliente/edit-cliente.component';



@NgModule({
  declarations: [
    RegistrarClienteComponent,
    ListaComponent,
    VerClienteComponent,
    FormularioClienteComponent,
    EditClienteComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ClienteModule { }
