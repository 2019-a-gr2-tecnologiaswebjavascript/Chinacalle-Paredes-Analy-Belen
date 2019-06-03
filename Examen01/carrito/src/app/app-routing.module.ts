import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RutaHomeComponent } from './rutas/ruta-home/ruta-home.component';
import { RutaMenuComponent } from './rutas/ruta-menu/ruta-menu.component';
import { TieneNombreService } from './guard/tiene-nombre.service';
import { RutaNoEncontradaComponent } from './rutas/ruta-no-encontrada/ruta-no-encontrada.component';

const routes: Routes = [
  {
    path: 'home/app',
    component: RutaHomeComponent
  },
  {
    path: 'menu',
    component: RutaMenuComponent,
    canActivate:[
      TieneNombreService
    ],
  },
  {
    path: '',
    redirectTo: 'home/app',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: RutaNoEncontradaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
