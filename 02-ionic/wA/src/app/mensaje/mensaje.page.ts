import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-mensaje',
  templateUrl: './mensaje.page.html',
  styleUrls: ['./mensaje.page.scss'],
})
export class MensajePage implements OnInit {

  constructor(
    private readonly _activatedRoute: ActivatedRoute
  ) { }

  nombre: any;
  mensaje: string;
  respuesta: string;
  respuestas = [
    {
      mensaje: 'soy una respuesta'
    },
    {
      mensaje: 'estoy escribiendo'
    },
    {
      mensaje: 'ojalá pasemos'
    },
  ];

  mensajeando(texto){

  }


  ngOnInit() {
    const parametros$ = this._activatedRoute.params;

    parametros$
    .subscribe(
      (parametros)=>{  //OK TRY
        this.nombre = parametros['nombre'];
        console.log('Parametros', this.nombre);
      },
      (error)=>{    //CATCH
        console.log('Error: ', error);
      },
      ()=>{ //Completado --> finally
        console.log('completo');
      }
    )


  }

}
