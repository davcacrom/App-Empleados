import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(private servicio:ClienteServiceService, private router: Router) { }

  ngOnInit(): void {

    if (localStorage.getItem('user') == null){
      this.router.navigate([""]);
    }
    this.clientes=this.servicio.getClientes();

  }

  borrarCliente(key:number){

    console.log(`Borrando cliente ${key}`);
    this.servicio.deleteCliente(key);

  }

}
