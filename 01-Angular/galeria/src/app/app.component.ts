import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Floreria';
  color = "rojo";

  arregloFlores =[
    new Flor("Rosa", "Azul"),
    new Flor("Dalias", "blancas"),
    new Flor("Margaritas", "Amarillas")
  ];

  arregloFloresJs = [
    {
      nombre: "Rosa",
      descripcion: "azul"
    },
    {
      nombre: "Dalias",
      descripcion: "Blancas"
    },
    {
      nombre: "Margaritas",
      descripcion: "Semiblancas"
    }
  ]

  cambioFeliz(evento:boolean){
    //logica para hacerle verde
    console.log("Feliz");
    this.color = "verde";
    
  }

  cambioEnojado(evento:boolean){
    //logica para hacerlo amarillo
    console.log("Enojado")
    this.color = "amarillo"

  }
}


// class Flor{
//   nombre: string;
//   descripcion: string;

//   constructor(nombre:string, descripcion:string){
//     this.nombre= nombre;
//   }
// }

class Flor{
  
  constructor(
    public nombre:string, //sin public no es un atributo de la clase
    public descripcion:string){
    
  }
}