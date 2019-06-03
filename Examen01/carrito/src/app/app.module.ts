import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RutaHomeComponent } from './rutas/ruta-home/ruta-home.component';
import { RutaMenuComponent } from './rutas/ruta-menu/ruta-menu.component';
import { RutaNoEncontradaComponent } from './rutas/ruta-no-encontrada/ruta-no-encontrada.component';
import {FormsModule} from '@angular/forms';
import { RutaAdministrarGruposComponent } from './rutas/ruta-administrar-grupos/ruta-administrar-grupos.component';
import { RutaRevisarComprasComponent } from './rutas/ruta-revisar-compras/ruta-revisar-compras.component';
import { RutaComprarComponent } from './rutas/ruta-comprar/ruta-comprar.component';

@NgModule({
  declarations: [
    AppComponent,
    RutaHomeComponent,
    RutaMenuComponent,
    RutaNoEncontradaComponent,
    RutaAdministrarGruposComponent,
    RutaRevisarComprasComponent,
    RutaComprarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
