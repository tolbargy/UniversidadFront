import { TipoIdentificacionService } from './../../services/tipo-identificacion.service';
import { TipoSangreService } from './../../services/tipo-sangre.service';
import { TipoSangre } from './../../model/tipo-sangre';
import { TipoIdentificacion } from './../../model/tipo-identificacion';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-guardar-estudiantes',
  templateUrl: './guardar-estudiantes.component.html',
  styleUrls: ['./guardar-estudiantes.component.css']
})
export class GuardarEstudiantesComponent implements OnInit {

  public selectTipoIdentificacion: TipoIdentificacion[] = [];
  public selectTipoSangre: TipoSangre[] = [];

  constructor(
    private servicioTipoSangre: TipoSangreService,
    private servicioTipoIdentificacion: TipoIdentificacionService
    ) { }

  ngOnInit(): void {
    this.cargarTipoIdentificacion();
    this.cargarTipoSangre();
  }
  
  cargarTipoIdentificacion(){
    this.servicioTipoIdentificacion.listarTodos().subscribe(res => {
      this.selectTipoIdentificacion = res;
    },error =>{
      console.log("Ha ocurrido un error al cargar los tipos de identificacion");
    });
  }

  cargarTipoSangre(){
    this.servicioTipoSangre.listarTodos().subscribe(res => {
      this.selectTipoSangre = res;
    },error =>{
      console.log("Ha ocurrido un error al cargar los tipos de sangre");
    });
  }

}
