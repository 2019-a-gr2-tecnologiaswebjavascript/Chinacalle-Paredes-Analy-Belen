import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class EstaLoggeadoService implements CanActivate {

  constructor(private readonly _authService: AuthService,
      private readonly _router:Router
    ) { }

  canActivate(route: ActivatedRouteSnapshot,
              state: RouterStateSnapshot): boolean | import("@angular/router").UrlTree | import("rxjs").Observable<boolean | import("@angular/router").UrlTree> | Promise<boolean | import("@angular/router").UrlTree> {
    //throw new Error("Method not implemented.");
    //console.log("Verificando si esta loggeado");
    const estaLoggeado = this._authService.estaLoggeado;
    if(estaLoggeado){
      console.log("Holiiiwiii")
      return true
    }
    else{
      const url = ["/home","app"];
      //alert("No tienes permisillos");
      //console.log(" No tienes permisiillos")
      this._router.navigate(url)
      console.log(" No tienes permisiillos")
      return false;
    }
    
  }

  

   
  
}
