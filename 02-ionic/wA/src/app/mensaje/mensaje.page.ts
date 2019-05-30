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
  mensaje: string ='a';
  msj:string;
  mensajes = [];
  //tipo 1--> respuesta   0--> mensaje
  respuestas = [
    {
      mensaje: 'soy una respuesta',
      respuesta: 1
    },
    {
      mensaje: 'estoy escribiendo',
      respuesta: 1
    },
    {
      mensaje: 'ojalá pasemos',
      respuesta: 1
    },
  ];

  //tipo 1--> respuesta   0--> mensaje
  mensajeando(texto){
    console.log(texto)
    this.aumentarMensaje(texto,0)
  }

  aumentarMensaje(mensajito:string, tipo:number){
    const indice:number = Math.round(Math.random()*3);
    console.log(indice)
    this.mensajes.push({mensaje: mensajito, respuesta:tipo})
    this.mensajes.push(this.respuestas[indice])
    console.log(this.mensajes)
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
