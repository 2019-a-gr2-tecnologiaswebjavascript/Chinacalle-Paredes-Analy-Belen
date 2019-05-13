import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  estaLoggeado: boolean = false;
  roles = [];

  constructor(private readonly _router: Router) { }

  login(credenciales:string, usuario: string){
    if(credenciales === "qwerty" && usuario === "analy"){
      this.estaLoggeado = true;
      const url = ["/creditos","a1","1",
    ];
    const parametros = {
      queryParams: {
        nombre: "Analy",
        apellido: "Chinacalle",
        edad: 22
      }
    };

      this._router.navigate(url, parametros)
      return true;
    } else{
      return false;
    }
  }

  logout(){
    this.estaLoggeado = false;
  }
}
