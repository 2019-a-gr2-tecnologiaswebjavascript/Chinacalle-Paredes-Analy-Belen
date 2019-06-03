import { Component, OnInit } from '@angular/core';
import { AdministrarGruposService } from '../servicios/administrar-grupos.service';

@Component({
  selector: 'app-ruta-nuevo-estudiante',
  templateUrl: './ruta-nuevo-estudiante.component.html',
  styleUrls: ['./ruta-nuevo-estudiante.component.css']
})
export class RutaNuevoEstudianteComponent implements OnInit {

  constructor(private readonly _adminGruposService: AdministrarGruposService) { }
  nombre: string = "";
  apellido: string = "";
  fechaNacimiento = "";
  semestreActual: number;
  Graduado: boolean;


  guardarUsuario(formulario){
    this.nombre = formulario.controls.nombre.value;
    //this._adminGruposService.insertar(this.nombre, this.apellido, this.fechaNacimiento, this.semestreActual, this.Graduado)

    console.log('formulario', this.nombre)
  }

  ngOnInit() {
  }

}
