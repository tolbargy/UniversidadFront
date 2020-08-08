import { Estudiante } from './../../model/estudiante';
import { FormControl } from '@angular/forms';
import { EstudianteService } from './../../services/estudiante.service';
import { EnfermedadEstudianteService } from './../../services/enfermedad-estudiante.service';
import { EnfermedadEstudiante } from './../../model/enfermedad-estudiante';
import { GuardarEnfermedadesComponent } from './../guardar-enfermedades/guardar-enfermedades.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-gestionar-enfermedades',
  templateUrl: './gestionar-enfermedades.component.html',
  styleUrls: ['./gestionar-enfermedades.component.css']
})
export class GestionarEnfermedadesComponent implements OnInit {

  public enfermedades: EnfermedadEstudiante[] = [];
  public idEstudiante: FormControl = new FormControl();
  public estudiantes: Estudiante[] = [];

  constructor(
    public dialog: MatDialog,
    private servicioEnfermedad: EnfermedadEstudianteService,
    private servicioEstudiante: EstudianteService
  ) { }

  ngOnInit(): void {
    this.listarTodos();
    this.listarEstudiantes();
  }

  public modalGuardarEnfermedad(id: number) {
    let dialogRef = this.dialog.open(GuardarEnfermedadesComponent, {
      height: '600px',
      width: '800px',
    });

    dialogRef.afterClosed().subscribe(res => {
      if (res) {
        this.listarTodos();
      }
    });
  }

  private listarTodos() {
    this.servicioEnfermedad.listarTodos().subscribe(res => {
      this.enfermedades = res;
    }, error => {
      console.log("Ha ocurrido un error al listar las enfermedades");
    });
  }

  private listarEstudiantes() {
    this.servicioEstudiante.listarTodos().subscribe(res => {
      this.estudiantes = res;
    }, error => {
      console.log("Ha ocurrido al listar los estudiantes");
    });
  }

  public filtrar() {
    this.servicioEnfermedad.listarPorIdEstudiante(this.idEstudiante.value).subscribe(res => {
      this.enfermedades = res;
    }, error => {
      console.log("Ha ocurrido al filtrar la enfermedad por el estudiante");
    });
  }

}
