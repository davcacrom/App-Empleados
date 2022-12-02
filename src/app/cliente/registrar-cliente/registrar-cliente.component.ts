import { Component, Input, OnInit } from '@angular/core';
import { ClienteServiceService } from '../cliente-service.service';
import { Cliente } from '../modelo/cliente.interface';

@Component({
  selector: 'app-registrar-cliente',
  templateUrl: './registrar-cliente.component.html',
  styles: [
  ]
})
export class RegistrarClienteComponent implements OnInit {

  clienteRegistro!:Cliente;
  constructor( private clienteService:ClienteServiceService) { }

  ngOnInit(): void {
    this.clienteRegistro
  }

  submit( cliente : Cliente):void{
    console.log(cliente)
    //llamar servicio añadir

  }

}
