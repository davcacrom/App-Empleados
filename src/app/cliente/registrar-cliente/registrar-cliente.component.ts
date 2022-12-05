import { Component, Input, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
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
  constructor( private clienteService:ClienteServiceService, private router: Router) { }

  ngOnInit(): void {
    this.clienteRegistro
  }

  submit( cliente : Cliente):void{
    //llamar servicio añadir
    this.clienteService.addCliente(cliente);
    this.router.navigate(["/cliente/lista"]);

  }

}
