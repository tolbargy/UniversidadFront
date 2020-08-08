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

  constructor(
    public dialog: MatDialog,
    private servicioEnfermedad: EnfermedadEstudianteService
  ) { }

  ngOnInit(): void {
    this.listarTodos();
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

}
