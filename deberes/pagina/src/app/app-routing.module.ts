import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ArticuloGatoNerviosoComponent } from './rutas/articulo-gato-nervioso/articulo-gato-nervioso.component';

const routes: Routes = [
  {
    path: "",
    component: AppComponent,
  },
  {
    path: "gatonervioso",
    component: ArticuloGatoNerviosoComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
