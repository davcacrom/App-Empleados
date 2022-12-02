import { Injectable } from '@angular/core';
import { Cliente } from './modelo/cliente.interface';

@Injectable({
  providedIn: 'root',
})
export class ClienteServiceService {
  clientes = new Map<number, Cliente>([
    [
      1,
      {
        nombre: 'David',
        apellidos: 'Cáceres Romero',
        e_mail: 'dcaceres@gmail.com',
        telefono: 12343455,
      },
    ],
    [
      2,
      {
        nombre: 'Daniel',
        apellidos: 'Martínez Romero',
        e_mail: 'dmartinez@gmail.com',
        telefono: 333333333,
      },
    ],
    [
      3,
      {
        nombre: 'Manolo',
        apellidos: 'Ortegad Romero',
        e_mail: 'manoloi@gmail.com',
        telefono: 8888888,
      },
    ],
    [
      4,
      {
        nombre: 'Amadeo',
        apellidos: 'Cáceres Tornero',
        e_mail: 'amadeoC@gmail.com',
        telefono: 101010101,
      },
    ],
    [
      5,
      {
        nombre: 'Imanol',
        apellidos: 'Cariñin Mejor',
        e_mail: 'icariñin@gmail.com',
        telefono: 636363636,
      },
    ],
    [
      6,
      {
        nombre: 'Rolando',
        apellidos: 'López Tornero',
        e_mail: 'rlopex@gmail.com',
        telefono: 101010101,
      },
    ],
    [
      7,
      {
        nombre: 'Marius',
        apellidos: 'Daniel Tornero',
        e_mail: 'daniF@gmail.com',
        telefono: 7878787878,
      },
    ],
  ]);

  constructor() {}
}
