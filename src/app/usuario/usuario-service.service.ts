import { Injectable } from '@angular/core';
import { Usuario } from './modelo/usuario.interface';

@Injectable({
  providedIn: 'root'
})
export class UsuarioServiceService {

  constructor() {

   }

   public guardarUsuario (key: string, value: Usuario){
    localStorage.setItem(key, value.username);
   }

   public mostrarUsuario(key: string){
    return localStorage.getItem(key);
   }

   public borrarUsuario(key: string){
    localStorage.removeItem(key);
   }

   public borrarTodo(){
    localStorage.clear();
   }

   

  usuarios:Usuario[] = [
    {
      username:"admin",
      e_mail:"dcaceres@gmail.com",
      password: "admin"
    }]

}
