import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from '../modelo/usuario.interface';
import { UsuarioServiceService } from '../usuario-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [],
})
export class LoginComponent implements OnInit {
  username: string = '';
  password: string = '';
  users: Usuario[] = [];
  errorUser: boolean = false;
  errorPassword: boolean = false;

  constructor(private ls: UsuarioServiceService, private router: Router) {}

  ngOnInit(): void {
    if (this.ls.mostrarDato('user') != null) {
      this.router.navigate(['/cliente/lista']);
    }
  }

  public login(): void {
    this.users = this.ls
      .getAllUsers()
      .filter((x) => x.username == this.username);
    if (this.users.length == 1) {
      this.errorUser = false;
      if (this.users[0].password == this.password) {
        this.ls.guardarDato('user', this.username);
        this.router.navigate(['/cliente/lista']);
        this.errorPassword = false;
      } else {
        this.errorPassword = true;
      }
    } else {
      this.errorUser = true;
    }
  }
}
