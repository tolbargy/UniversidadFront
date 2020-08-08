import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TipoSangre } from '../model/tipo-sangre';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TipoSangreService {

  private path: string = environment.urlApi+"/tipo-sangre";

  constructor(private http: HttpClient) { }
  
  listarTodos(){
    return this.http.get<TipoSangre[]>(this.path);
  }




}
