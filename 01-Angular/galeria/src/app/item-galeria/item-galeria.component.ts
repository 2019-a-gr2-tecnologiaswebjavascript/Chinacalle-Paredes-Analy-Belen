import { Component, OnInit, Input } from '@angular/core';

@Component({  //decorador    Se le envia un objeto javascript
  selector: 'app-item-galeria', //nombre de la etiqueta
  templateUrl: './item-galeria.component.html',   // En donde está la estructura
  styleUrls: ['./item-galeria.component.css']   //varias
})
export class ItemGaleriaComponent implements OnInit {

  title = 'Licoreria';

  @Input()
  textoBoton;

  
  @Input() //que el usuario pueda ingresar
  nombreItem;

  constructor() { }

  ngOnInit() {
  }

  alertar(){
    alert('Auxilioo me desmayo' + this.nombreItem);
  }

}



// //Clase -> Metodos --> atributos --> constructor

// //@Decorators()  --> Función que se ejecura antes  --> Puede o no tener parametros
// class Usuario {
//   private nombre = 'Analy';

//   constructor(){}

//   public metodoPublico(){}

//   private metodoPrivado(){}

//   protected metodoProtected(){}
// }