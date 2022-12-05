import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
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
  constructor( private router:Router) { }

  edit:Boolean = false;
  @Output() onNuevoCliente : EventEmitter<Cliente> = new EventEmitter();
  @Output() onEditarCliente : EventEmitter<Cliente> = new EventEmitter();

  ngOnInit(): void {
    if(this.router.url.substring(this.router.url.lastIndexOf('/') + 1) != "registro"){
      this.edit=true;

    }

    console.log(this.edit)

  }

  submit(){

    this.onNuevoCliente.emit(this.cliente)
  }



  submit1(){
    this.onEditarCliente.emit(this.cliente);
    console.log('cliente en formulario',this.cliente);
  }

}
