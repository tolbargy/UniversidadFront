import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GestionarEstudiantesComponent } from './modulos/gestionar-estudiantes/gestionar-estudiantes.component';
import { GestionarEnfermedadesComponent } from './modulos/gestionar-enfermedades/gestionar-enfermedades.component';

@NgModule({
  declarations: [
    AppComponent,
    GestionarEstudiantesComponent,
    GestionarEnfermedadesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
