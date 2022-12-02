import { Component, OnInit } from '@angular/core';
import { ClienteServiceService } from '../cliente-service.service';
import { Cliente } from '../modelo/cliente.interface';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styles: [
  ]
})
export class ListaComponent implements OnInit {

  clientes:Map<number,Cliente>;

  constructor(private servicio:ClienteServiceService) { }

  ngOnInit(): void {

    this.servicio.buscarPais(termino);

  }

}
