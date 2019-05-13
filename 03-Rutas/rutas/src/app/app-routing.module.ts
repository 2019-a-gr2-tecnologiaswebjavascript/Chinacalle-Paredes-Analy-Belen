import { NgModule, OnInit } from '@angular/core';
import { Routes, RouterModule, ActivatedRoute } from '@angular/router';
import { RutaHomeComponent } from './rutas/ruta-home/ruta-home.component';
import { RutaCreditosComponent } from './rutas/ruta-creditos/ruta-creditos.component';
import { RutaProductosComponent } from './rutas/ruta-productos/ruta-productos.component';
import { RutaNoEncontradoComponent } from './rutas/ruta-no-encontrado/ruta-no-encontrado.component';
import { RutaProductosHogarComponent } from './rutas/ruta-productos-hogar/ruta-productos-hogar.component';
import { RutaProductosVideojuegosComponent } from './rutas/ruta-productos-videojuegos/ruta-productos-videojuegos.component';
import { RutaVideojuegosFutbolComponent } from './rutas/ruta-videojuegos-futbol/ruta-videojuegos-futbol.component';
import { RutaVideojuegosPeleaComponent } from './rutas/ruta-videojuegos-pelea/ruta-videojuegos-pelea.component';
import { RutaVideojuegosCarrerasComponent } from './rutas/ruta-videojuegos-carreras/ruta-videojuegos-carreras.component';
import { EstaLoggeadoService } from './servicios/guards/esta-loggeado.service';

const routes: Routes = [
  {
    path: 'home/app',
    component: RutaHomeComponent
  },
  {
    path: 'creditos/:idCredito/:tasaReferencia?',
    component: RutaCreditosComponent,
    canActivate:[
      EstaLoggeadoService
    ],
  },
  {
    path: 'productos',
    component: RutaProductosComponent,
    children: [
      {
        path: 'hogar',
        component: RutaProductosHogarComponent
      },
      {
        path: 'videojuegos',
        component: RutaProductosVideojuegosComponent,
        children: [
          {
            path: 'futbol',
            component: RutaVideojuegosFutbolComponent
          },
          {
            path: 'pelea',
            component: RutaVideojuegosPeleaComponent
          },
          {
            path: 'carreras',
            component: RutaVideojuegosCarrerasComponent
          }
        ]
      }
    ]
  },
  {
    path: '',
    redirectTo: 'home/app',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: RutaNoEncontradoComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    useHash: true
  })],
  exports: [RouterModule]
})
export class AppRoutingModule implements OnInit{

  
  
  ngOnInit(){
    

  }
 }
