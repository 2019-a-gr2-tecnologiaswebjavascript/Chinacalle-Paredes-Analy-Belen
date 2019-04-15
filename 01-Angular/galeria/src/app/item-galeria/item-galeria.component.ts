import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { CarritoService } from '../servicios/carrito/carrito.service';

@Component({  //decorador    Se le envia un objeto javascript
  selector: 'app-item-galeria', //nombre de la etiqueta
  templateUrl: './item-galeria.component.html',   // En donde está la estructura
  styleUrls: ['./item-galeria.component.css']   //varias
})
export class ItemGaleriaComponent implements OnInit, OnDestroy {


  title = 'Licoreria';
  

  @Input()
  titulo;


  @Input()
  textoBoton;

  
  @Input() //que el usuario pueda ingresar
  nombreItem;

  @Output()
  cambioFeliz:EventEmitter<boolean> = new EventEmitter()

  @Output()
  cambioEnojado:EventEmitter<boolean> = new EventEmitter()

  url = "http://static.t13.cl/images/sizes/1200x675/1532388113-auno886072.jpg";

  @Input()
  notas;  //productos

  //Dependency Injection
  //Injección de dependencias  --> Servicios --> Compartidos
  //Se inyectan en Componentes, Servicios y modulos
  constructor(private readonly _carritoService:CarritoService ) { }

  

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
  ngOnInit() {
    console.log('Empezo')
    console.log(this._carritoService.carritoCompras)
  }
  
  ngOnDestroy(){
    console.log('"Termino"')
  }


  agregarCarrito(valorCarrito){
    //this._carritoService.carritoCompras.push(valorCarrito);

    const itemCarrito = {
      valor: valorCarrito,
      tienda: this.titulo
    }

    this._carritoService.carritoCompras.splice(0,0,itemCarrito);

    console.log(this._carritoService.carritoCompras);
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