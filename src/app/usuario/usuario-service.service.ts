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

  public guardarDato(key:string, value:string){
    localStorage.setItem(key, value);
  }

  public mostrarDato(key:string){
    return localStorage.getItem(key);
  }

  public borrarDato(key:string){
    localStorage.removeItem(key);
  }

  public borrarTodo(){
    localStorage.clear();
  }

  public getAllUsers():Usuario[]{
    return this.usuarios;
  }
}
