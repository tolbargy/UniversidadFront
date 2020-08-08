import { Estudiante } from './../../model/estudiante';
import { EstudianteService } from './../../services/estudiante.service';
import { GuardarEstudiantesComponent } from './../guardar-estudiantes/guardar-estudiantes.component';
import { Component, OnInit } from '@angular/core';
import { TipoSangreService } from '../../services/tipo-sangre.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-gestionar-estudiantes',
  templateUrl: './gestionar-estudiantes.component.html',
  styleUrls: ['./gestionar-estudiantes.component.css']
})
export class GestionarEstudiantesComponent implements OnInit {

  public listaEstudiantes: Estudiante[] = [];

  constructor(
    public dialog: MatDialog,
    private servicioEstudiante: EstudianteService
  ) { }

  ngOnInit(): void {
    this.listarTodos();
  }

  private listarTodos() {
    this.servicioEstudiante.listarTodos().subscribe(res => {
      this.listaEstudiantes = res;
    }, error => {
      console.log("Ha ocurrido un error al cargar los estudiantes");
    });
  }

  public modalGuardarEstudiante(id: number) {
    const dialogRef = this.dialog.open(GuardarEstudiantesComponent, {
      height: '700px',
      width: '800px',
      data: {
        id: id
      }
    });
    dialogRef.afterClosed().subscribe(res => {
      if (res) {
        this.listarTodos();
      }
    });
  }

}
