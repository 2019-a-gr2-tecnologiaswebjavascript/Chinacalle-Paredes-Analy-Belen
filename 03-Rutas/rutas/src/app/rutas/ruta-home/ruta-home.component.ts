import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/servicios/auth/auth.service';

@Component({
  selector: 'app-ruta-home',
  templateUrl: './ruta-home.component.html',
  styleUrls: ['./ruta-home.component.css']
})
export class RutaHomeComponent implements OnInit {

  constructor(private readonly _authService: AuthService) { }

  ngOnInit() {
  }

  login(){
    console.log("estamos loggeando")
    this._authService.login("qwerty", "analy");

  }

  logout(){
    console.log("Saliendo del sistema");
    this._authService.logout();
  }

}
