import { TipoIdentificacion } from './../model/tipo-identificacion';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TipoIdentificacionService {

  private path: string = environment.urlApi+"/tipo-identificacion";

  constructor(private http: HttpClient) { }
  
  listarTodos(){
    return this.http.get<TipoIdentificacion[]>(this.path);
  }
}
