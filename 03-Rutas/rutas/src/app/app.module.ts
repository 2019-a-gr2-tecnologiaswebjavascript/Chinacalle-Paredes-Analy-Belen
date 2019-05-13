import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
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
import { AuthService } from './servicios/auth/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    RutaHomeComponent,
    RutaCreditosComponent,
    RutaProductosComponent,
    RutaNoEncontradoComponent,
    RutaProductosHogarComponent,
    RutaProductosVideojuegosComponent,
    RutaVideojuegosFutbolComponent,
    RutaVideojuegosPeleaComponent,
    RutaVideojuegosCarrerasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [//servicios
    EstaLoggeadoService,
    AuthService,
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
