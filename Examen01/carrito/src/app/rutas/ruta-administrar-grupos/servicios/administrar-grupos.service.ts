import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdministrarGruposService {
  
  
  constructor() { }

  listaEstudiantes: Estudiante[] = [
    {
      id: 1,
      nombres: 'Analy',
      apellidos: 'Chinacalle',
      fechaNacimiento: '1996-12-26',
      semestreActual: 8,
      graduado: false
    },
    {
      id: 2,
      nombres: 'Meow',
      apellidos: 'Alfalfa',
      fechaNacimiento: '2016-06-26',
      semestreActual: 1,
      graduado: false
    },
    {
      id: 3,
      nombres: 'Pepito',
      apellidos: 'Perez',
      fechaNacimiento: '1980-12-26',
      semestreActual: 10,
      graduado: true
    },
  ];
  
  listaMaterias: Materia[] = [
    {
      nombre: 'JavaScript',
      precio: 100,
      codigo: 1,  //id materia
      descripcion: 'dificicicicicicilisima',
      activo: true,
      fechaCreacion: '2000-10-01',
      numeroHorasPorSemana: 4,
      estudianteid: [1,]
    },
    {
      nombre: 'Algebra',
      precio: 170,
      codigo: 2,  //id materia
      descripcion: 'dificil',
      activo: true,
      fechaCreacion: '2000-10-01',
      numeroHorasPorSemana: 10,
      estudianteid: [2,]
    },
  ]
  
  
  enviarEstudiantes(){
    console.log(this.listaEstudiantes)
    return this.listaEstudiantes
  }

  busqueda(key: string){
    const busqueda = this.listaEstudiantes.filter(n => (n.nombres.includes(key)));

    console.log(busqueda);
    return busqueda;
  }

  buscarIndex(id: number){
    const elemento = this.listaEstudiantes.findIndex(n => (n.id === id));
    console.log(elemento)
    return elemento;
  }

  eliminar(id:number){
    const index = this.buscarIndex(id);
    this.listaEstudiantes.splice(index,1);
    return this.listaEstudiantes;
  }

  asignarIndice(){

    let max = 1;
    this.listaEstudiantes.forEach(
      (actual, indice, arreglo) =>{
        if (actual.id > max){
          max = actual.id
        }
      }
    );
    console.log(max);
    return max;
  }
  insertar(nombre, apellido, fecha, semestre, graduado){
    const indice = this.asignarIndice()
    const nuevo: Estudiante = {
      id: indice,
      nombres: nombre,
      apellidos: apellido,
      fechaNacimiento: fecha,
      semestreActual: semestre,
      graduado: graduado
    };
    this.listaEstudiantes.push(nuevo);

  }





}

export interface Estudiante {
  id: number;
  nombres: string;
  apellidos: string;
  fechaNacimiento: string;
  semestreActual: number;
  graduado: boolean;
}

export interface Materia {
  nombre: string;
  precio: number;
  codigo: number;  //id materia
  descripcion: string;
  activo: boolean;
  fechaCreacion: string;
  numeroHorasPorSemana: number;
  estudianteid: Estudiante['id'][];
}
