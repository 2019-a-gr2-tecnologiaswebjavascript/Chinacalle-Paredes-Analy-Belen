import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  personas = [
    { 
      nombre: "Pedrito",
      mensaje: 'Mensaje mensajoso',
      imagen: 'https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y'
    },
    { 
      nombre: "Analy",
      mensaje: 'Mensaje mensajoso',
      imagen: 'https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y'
    },
    { 
      nombre: "Meow",
      mensaje: 'Mensaje mensajoso',
      imagen: 'https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y'
    },
    { 
      nombre: "Manchas",
      mensaje: 'Mensaje mensajoso',
      imagen: 'https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y'
    },
    { 
      nombre: "Mushu",
      mensaje: 'Mensaje mensajoso',
      imagen: 'https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y'
    },
    { 
      nombre: "Noviko",
      mensaje: 'Mensaje mensajoso',
      imagen: 'https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y'
    },
  ]

  mensaje(item){
    console.log("el mensaje es: ", item);
  }
}
