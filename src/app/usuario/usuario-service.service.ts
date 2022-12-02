import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuarioServiceService {

  constructor() {

   }

   public guardarUsuario (key: string, value: string){
    localStorage.setItem(key, value);
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
}
