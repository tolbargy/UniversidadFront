import { MatDialogRef } from '@angular/material/dialog';
import { EnfermedadEstudiante } from './../../model/enfermedad-estudiante';
import { ToastrService } from 'ngx-toastr';
import { EnfermedadEstudianteService } from './../../services/enfermedad-estudiante.service';
import { EstudianteService } from './../../services/estudiante.service';
import { Estudiante } from './../../model/estudiante';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-guardar-enfermedades',
  templateUrl: './guardar-enfermedades.component.html',
  styleUrls: ['./guardar-enfermedades.component.css']
})
export class GuardarEnfermedadesComponent implements OnInit {

  public formEnfermedad: FormGroup;
  public selectEstudiante: Estudiante[] = [];

  constructor(
    private servicioEstudiante: EstudianteService,
    private servicioEnfermedad: EnfermedadEstudianteService,
    private toast: ToastrService,
    public dialogRef: MatDialogRef<GuardarEnfermedadesComponent>
  ) { }

  ngOnInit(): void {
    this.inicializarFormulario();
    this.cargarEstudiantes();
  }

  private inicializarFormulario() {
    this.formEnfermedad = new FormGroup({
      idEstudiante: new FormControl(null, Validators.required),
      nombre: new FormControl(null, Validators.required),
      observacion: new FormControl(null, Validators.required)
    })
  }

  private cargarEstudiantes() {
    this.servicioEstudiante.listarTodos().subscribe(res => {
      this.selectEstudiante = res;
    }, error => {
      console.log("Ha ocurrido un error al cargar los estudiantes");
    });
  }

  public registrar() {
    let estudiante: Estudiante = new Estudiante();
    estudiante.id = this.formEnfermedad.controls['idEstudiante'].value;

    let enfermedadEstudiante: EnfermedadEstudiante = new EnfermedadEstudiante();
    enfermedadEstudiante.estudiante = estudiante;
    enfermedadEstudiante.nombre = this.formEnfermedad.controls['nombre'].value;
    enfermedadEstudiante.observacion = this.formEnfermedad.controls['observacion'].value;

    this.servicioEnfermedad.registrar(enfermedadEstudiante).subscribe(res => {
      this.toast.success("Se ha registrado la enfermedad", "CORRECTO")
      this.dialogRef.close(true);
    }, error => {
      console.log("Ha ocurrido un error al registrar la enfermedad");
    });
  }

}
