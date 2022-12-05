import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClienteServiceService } from '../cliente-service.service';
import { Cliente } from '../modelo/cliente.interface';

@Component({
  selector: 'app-edit-cliente',
  templateUrl: './edit-cliente.component.html',
  styles: [
  ]
})
export class EditClienteComponent implements OnInit {

  key!:number;

  constructor(private servicio:ClienteServiceService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.key = Number(this.route.snapshot.paramMap.get('id'));
  }

  editar(cliente:Cliente):void{
    //console.log(this.cliente);
    this.servicio.editCliente(this.key,cliente);
    console.log('key editar',this.key);
    console.log('cliente editar',cliente);
  }
}
