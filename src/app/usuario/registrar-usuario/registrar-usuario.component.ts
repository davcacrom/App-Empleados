import { Component, OnInit } from '@angular/core';
import { Usuario } from '../modelo/usuario.interface';
import { UsuarioServiceService } from '../usuario-service.service';

@Component({
  selector: 'app-registrar-usuario',
  templateUrl: './registrar-usuario.component.html',
  styles: [
  ]
})
export class RegistrarUsuarioComponent implements OnInit {

  nuevoUsuario: Usuario = {
    username: "",
    e_mail: "",
    password: ""
  }

  constructor(private usuarioService: UsuarioServiceService) { }

  ngOnInit(): void {
  }

  guardar(): void {
    //this.usuarioService.guardarUsuario("1", this.nuevoUsuario);
    //var indice = this.usuarioService.usuarios.length;
    this.usuarioService.usuarios.push(this.nuevoUsuario);
    console.log(JSON.stringify(this.nuevoUsuario));
    console.log(this.usuarioService.usuarios)

  }

}
