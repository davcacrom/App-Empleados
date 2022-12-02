import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Cliente } from '../../modelo/cliente.interface';

@Component({
  selector: 'app-formulario-cliente',
  templateUrl: './formulario-cliente.component.html',
  styles: [
  ]
})
export class FormularioClienteComponent implements OnInit {

  cliente:Cliente = {
    nombre:"",
    apellidos:"",
    telefono:0,
    e_mail:""
  };
  constructor() { }

  @Output() onNuevoCliente : EventEmitter<Cliente> = new EventEmitter();

  ngOnInit(): void {
  }

  submit(){

    this.onNuevoCliente.emit(this.cliente)
  }

}
