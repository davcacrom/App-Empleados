import { Injectable } from '@angular/core';
import { Usuario } from './modelo/usuario.interface';

@Injectable({
  providedIn: 'root'
})
export class UsuarioServiceService {

  usuarios:Usuario[] = [
    {
      username:"admin",
      e_mail:"dcaceres@gmail.com",
      password: "admin"
    }]
  constructor() { }
}
