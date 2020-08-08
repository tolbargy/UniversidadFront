import { GuardarEnfermedadesComponent } from './../guardar-enfermedades/guardar-enfermedades.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-gestionar-enfermedades',
  templateUrl: './gestionar-enfermedades.component.html',
  styleUrls: ['./gestionar-enfermedades.component.css']
})
export class GestionarEnfermedadesComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
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

  }

}
