import { Component, OnInit } from '@angular/core';
import { AdministrarGruposService } from '../ruta-administrar-grupos/servicios/administrar-grupos.service';

@Component({
  selector: 'app-ruta-revisar-compras',
  templateUrl: './ruta-revisar-compras.component.html',
  styleUrls: ['./ruta-revisar-compras.component.css']
})
export class RutaRevisarComprasComponent implements OnInit {

  facturas =[];
  constructor(private readonly _AdminGruposService: AdministrarGruposService) { }

  buscar(texto) {
    const busq: string= "";
    texto = busq;
    console.log(texto);
    this.facturas = this._AdminGruposService.busquedaFactura(texto);
  }

  ngOnInit() {
    this.facturas = this._AdminGruposService.enviarFacturas();
  }

}
