import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GestionarEstudiantesComponent } from './modulos/gestionar-estudiantes/gestionar-estudiantes.component';
import { GestionarEnfermedadesComponent } from './modulos/gestionar-enfermedades/gestionar-enfermedades.component';

const routes: Routes = [
  {path : 'gestionar-estudiantes', component : GestionarEstudiantesComponent},
  {path : 'gestionar-enfermedades', component : GestionarEnfermedadesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
