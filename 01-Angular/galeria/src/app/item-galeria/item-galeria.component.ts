import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

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

  @Output()
  cambioFeliz:EventEmitter<boolean> = new EventEmitter()

  @Output()
  cambioEnojado:EventEmitter<boolean> = new EventEmitter()

  url = "http://static.t13.cl/images/sizes/1200x675/1532388113-auno886072.jpg";

  notas = [1,2,3,4,5,6,7,8,9,10]

  constructor() { }

  ngOnInit() {
  }

  alertar(){
    alert('Auxilioo me desmayo' + this.nombreItem);
  }

  alertarBlur(){
    alert('Alertar blur');
  }

  cambiarImagen(){
    const gatoEnojado = "https://smoda.elpais.com/wp-content/uploads/images/201351/cover_188.jpg";
    const gatoFeliz = "http://static.t13.cl/images/sizes/1200x675/1532388113-auno886072.jpg";
    //var url2 =""; NO USAR
    //let url3 = "https://smoda.elpais.com/wp-content/uploads/images/201351/cover_188.jpg";

    if(this.url === gatoEnojado){
      this.url = gatoFeliz
      this.cambioFeliz.emit(true)
    }else{
      this.url =  gatoEnojado;
      this.cambioEnojado.emit(true)
    }
    
    
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