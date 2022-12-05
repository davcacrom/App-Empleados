import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { OuterSubscriber } from 'rxjs/internal/OuterSubscriber';
import { ClienteServiceService } from '../cliente-service.service';
import { Cliente } from '../modelo/cliente.interface';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styles: [
  ]
})
export class ListaComponent implements OnInit {

  clientes:Map<number,Cliente>=new Map<number,Cliente>([]);

  constructor(private servicio:ClienteServiceService) { }

  ngOnInit(): void {

    this.clientes=this.servicio.getClientes();

  }

  borrarCliente(key:number){

    console.log(`Borrando cliente ${key}`);
    this.servicio.deleteCliente(key);

  }

}
