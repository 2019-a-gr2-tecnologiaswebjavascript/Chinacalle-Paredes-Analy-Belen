import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArticuloComponent } from './articulo/articulo.component';
import { FooterComponent } from './footer/footer.component';
import { ArticuloGatoNerviosoComponent } from './rutas/articulo-gato-nervioso/articulo-gato-nervioso.component';
import { ArticuloCoronelMeowComponent } from './rutas/articulo-coronel-meow/articulo-coronel-meow.component';

@NgModule({
  declarations: [
    AppComponent,
    ArticuloComponent,
    FooterComponent,
    ArticuloGatoNerviosoComponent,
    ArticuloCoronelMeowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
