import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditClienteComponent } from '../cliente/edit-cliente/edit-cliente.component';
import { ListaComponent } from '../cliente/lista/lista.component';
import { RegistrarClienteComponent } from '../cliente/registrar-cliente/registrar-cliente.component';
import { VerClienteComponent } from '../cliente/ver-cliente/ver-cliente.component';
import { LoginComponent } from '../usuario/login/login.component';
import { RegistrarUsuarioComponent } from '../usuario/registrar-usuario/registrar-usuario.component';

const routes: Routes = [
  {
    path:'',
    component: LoginComponent
  }, {
    path:'usuario/registro',
    component: RegistrarUsuarioComponent
  },{
    path:'cliente/registro',
    component: RegistrarClienteComponent
  },{
    path:'cliente/lista',
    component: ListaComponent
  },{
    path:'cliente/edit/:id',
    component: EditClienteComponent
  },{
    path:'cliente/:id',
    component: VerClienteComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
