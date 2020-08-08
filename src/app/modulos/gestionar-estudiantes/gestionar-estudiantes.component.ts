import { ToastrService } from 'ngx-toastr';
import { ModalConfirmarEliminarComponent } from './../modal-confirmar-eliminar/modal-confirmar-eliminar.component';
import { Estudiante } from './../../model/estudiante';
import { EstudianteService } from './../../services/estudiante.service';
import { GuardarEstudiantesComponent } from './../guardar-estudiantes/guardar-estudiantes.component';
import { Component, OnInit } from '@angular/core';
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
    private servicioEstudiante: EstudianteService,
    private toast: ToastrService
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

  public eliminar(id: number) {
    const dialogRef = this.dialog.open(ModalConfirmarEliminarComponent);
    dialogRef.afterClosed().subscribe(res => {
      if (res) {
        this.servicioEstudiante.eliminar(id).subscribe(res => {
          this.toast.success("Se ha eliminado el estudiante", "ELIMINADO")
          this.listarTodos();
        }, error => {
          console.log("Ha ocurrido error al eliminar el estudiante");
        });
      }
    });
  }

}
