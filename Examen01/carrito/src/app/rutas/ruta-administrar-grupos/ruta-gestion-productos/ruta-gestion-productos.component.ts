import { Component, OnInit } from '@angular/core';
import { AdministrarGruposService } from '../servicios/administrar-grupos.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ruta-gestion-productos',
  templateUrl: './ruta-gestion-productos.component.html',
  styleUrls: ['./ruta-gestion-productos.component.css']
})
export class RutaGestionProductosComponent implements OnInit {

  idProducto: number;
  materias = [];
  busqueda: string = "";
  constructor(private readonly _adminGrupoService: AdministrarGruposService,
              private readonly _activatedRoute: ActivatedRoute
    ) { }

    buscar(texto) {
      this.busqueda = texto;
      console.log(texto);
      this.materias = this._adminGrupoService.busquedaMateria(texto);
  
    }

    eliminar(id){
      this.materias = this._adminGrupoService.eliminarMateria(id);
    }

    redirigir(){
      //[routerLink]="['/menu','revisar-grupos','producto','nuevo']"
      const ruta = ['/menu','revisar-grupos','producto','nuevo',+this.idProducto]
      this._adminGrupoService.redirigir(ruta);
    }

  ngOnInit() {
    const parametros$ = this._activatedRoute.params;  //$ significa que es un observable
    
    console.log('inicio');
    
    parametros$
    .subscribe(
      (parametros)=>{  //OK TRY
        console.log('Parametros', parametros);
        this.idProducto = Number(parametros['idProducto']);
        this.materias = this._adminGrupoService.enviarMateriasPorEstudiante(this.idProducto);
      },
      (error)=>{    //CATCH
        console.log('Error: ', error)
      },
      ()=>{ //Completado --> finally
        console.log('completo')
      }
    )

    console.log('fin');
    
  }

}
