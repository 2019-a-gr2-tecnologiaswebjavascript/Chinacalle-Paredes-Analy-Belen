import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ruta-creditos',
  templateUrl: './ruta-creditos.component.html',
  styleUrls: ['./ruta-creditos.component.css']
})
export class RutaCreditosComponent implements OnInit {

  constructor(private readonly _activatedRoute: ActivatedRoute){}

  ngOnInit() {
    const parametros$ = this._activatedRoute.params;  //$ significa que es un observable
    const parametrosConsulta$ = this._activatedRoute.queryParams;
//Ambos parametros no necesitan las funciones "Catch" y "Complete" porque son especiallleeessss 

    parametrosConsulta$.subscribe(
      (parametrosConsulta)=>{
        console.log('Parametros consulta:', parametrosConsulta)
      }
    )

    console.log('inicio');
    
    parametros$
    .subscribe(
      (parametros)=>{  //OK TRY
        console.log('Parametros', parametros)
      },
      (error)=>{    //CATCH
        console.log('Error: ', error)
      },
      ()=>{ //Completado --> finally
        console.log('completo')
      }
    )

    console.log('fin');
  }

}
