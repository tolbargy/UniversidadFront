import { Estudiante } from './../model/estudiante';
import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EstudianteService {

  private path: string = environment.urlApi + "/estudiante";

  constructor(private http: HttpClient) { }

  listarTodos(){
    return this.http.get<Estudiante[]>(this.path);
  }

  listarPorId(id: number){
    return this.http.get<Estudiante>(`${this.path}/${id}`);
  }

  registrar(estudiante: Estudiante){
    return this.http.post<void>(this.path,estudiante);
  }

  actualizar(estudiante: Estudiante){
    return this.http.put<void>(this.path,estudiante);
  }

  eliminar(id: number){
    return this.http.delete<void>(`${this.path}/${id}`);
  }
}
