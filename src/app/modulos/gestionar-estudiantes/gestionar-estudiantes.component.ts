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

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  modalGuardarEstudiante(id: number) {
    const dialogRef = this.dialog.open(GuardarEstudiantesComponent,{
      height: '700px',
      width: '800px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
