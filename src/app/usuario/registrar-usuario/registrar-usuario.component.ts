import { Component, OnInit } from '@angular/core';
import { UsuarioServiceService } from '../usuario-service.service';

@Component({
  selector: 'app-registrar-usuario',
  templateUrl: './registrar-usuario.component.html',
  styles: [
  ]
})
export class RegistrarUsuarioComponent implements OnInit {

  constructor(private usuarioService: UsuarioServiceService) { }

  ngOnInit(): void {
  }

}
