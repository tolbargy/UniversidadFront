import { EnfermedadEstudiante } from './../model/enfermedad-estudiante';
import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EnfermedadEstudianteService {

  private path: string = environment.urlApi + "/enfermedad-estudiante";

  constructor(private http: HttpClient) { }

  listarTodos() {
    return this.http.get<EnfermedadEstudiante[]>(this.path);
  }

  registrar(entidad: EnfermedadEstudiante) {
    return this.http.post<void>(this.path, entidad);
  }


}
