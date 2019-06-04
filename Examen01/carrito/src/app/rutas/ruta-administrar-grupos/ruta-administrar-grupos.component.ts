import { Component, OnInit } from '@angular/core';
import { AdministrarGruposService } from './servicios/administrar-grupos.service';
import { stringify } from '@angular/core/src/util';
import { text } from '@angular/core/src/render3';

@Component({
  selector: 'app-ruta-administrar-grupos',
  templateUrl: './ruta-administrar-grupos.component.html',
  styleUrls: ['./ruta-administrar-grupos.component.css']
})
export class RutaAdministrarGruposComponent implements OnInit {

  constructor(private readonly _AdminGruposService: AdministrarGruposService) { }
  busqueda: string;
  estudiantes =[];

  buscar(texto) {
    const busq: string= "";
    texto = busq;
    console.log(texto);
    this.estudiantes = this._AdminGruposService.busqueda(texto);

  }

  eliminar(id){
    this.estudiantes = this._AdminGruposService.eliminar(id);
  }

  redirigir(id){
    const ruta = ['/menu','revisar-grupos','producto',id];
    this._AdminGruposService.redirigir(ruta);
  }

  ngOnInit() {
    this.estudiantes = this._AdminGruposService.enviarEstudiantes();
    console.log(this.estudiantes)


  }

}
