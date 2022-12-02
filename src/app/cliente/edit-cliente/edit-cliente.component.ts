import { Component, Input, OnInit } from '@angular/core';
import { Cliente } from '../modelo/cliente.interface';

@Component({
  selector: 'app-edit-cliente',
  templateUrl: './edit-cliente.component.html',
  styles: [
  ]
})
export class EditClienteComponent implements OnInit {

  @Input() cliente!:Cliente;
  constructor() { }

  ngOnInit(): void {
  }

  submit( ){

  }


}
