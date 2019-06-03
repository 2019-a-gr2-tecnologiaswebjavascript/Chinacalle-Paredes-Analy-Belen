import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdministrarGruposService {
  constructor() { }
}

export interface Estudiante {
  id: number;
  nombres: string;
  apellidos: string;
  fechaNacimiento: Date;
  semestreActual: number;
  graduado: boolean;
}

export interface Materia {
  nombre: string;
  precio: number;
  codigo: number;  //id materia
  descripcion: string;
  activo: boolean;
  fechaCreacion: Date;
  numeroHorasPorSemana: number;
  estudianteid: Estudiante['id'][];
}
