import { EstudianteService } from './../../services/estudiante.service';
import { Estudiante } from './../../model/estudiante';
import { TipoIdentificacionService } from './../../services/tipo-identificacion.service';
import { TipoSangreService } from './../../services/tipo-sangre.service';
import { TipoSangre } from './../../model/tipo-sangre';
import { TipoIdentificacion } from './../../model/tipo-identificacion';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-guardar-estudiantes',
  templateUrl: './guardar-estudiantes.component.html',
  styleUrls: ['./guardar-estudiantes.component.css']
})
export class GuardarEstudiantesComponent implements OnInit {

  public selectTipoIdentificacion: TipoIdentificacion[] = [];
  public selectTipoSangre: TipoSangre[] = [];
  public formEstudiante: FormGroup;

  constructor(
    private servicioTipoSangre: TipoSangreService,
    private servicioTipoIdentificacion: TipoIdentificacionService,
    private servicioEstudiante: EstudianteService,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.inicializarFormulario();
    this.cargarTipoIdentificacion();
    this.cargarTipoSangre();
  }

  inicializarFormulario() {
    this.formEstudiante = new FormGroup({
      idTipoIdentificacion: new FormControl(null, Validators.required),
      numeroIdentificacion: new FormControl(null, Validators.required),
      nombre: new FormControl(null, Validators.required),
      apellido: new FormControl(null, Validators.required),
      fechaNacimiento: new FormControl(null, Validators.required),
      idTipoSangre: new FormControl(null, Validators.required)
    });
  }

  private cargarTipoIdentificacion() {
    this.servicioTipoIdentificacion.listarTodos().subscribe(res => {
      this.selectTipoIdentificacion = res;
    }, error => {
      console.log("Ha ocurrido un error al cargar los tipos de identificacion");
    });
  }

  private cargarTipoSangre() {
    this.servicioTipoSangre.listarTodos().subscribe(res => {
      this.selectTipoSangre = res;
    }, error => {
      console.log("Ha ocurrido un error al cargar los tipos de sangre");
    });
  }

  public guardar() {
    let tipoIdentificacion: TipoIdentificacion = new TipoIdentificacion();
    tipoIdentificacion.id = this.formEstudiante.controls['idTipoIdentificacion'].value;
    let tipoSangre: TipoSangre = new TipoSangre();
    tipoSangre.id = this.formEstudiante.controls['idTipoSangre'].value;

    let estudiante: Estudiante = new Estudiante();
    estudiante.tipoIdentificacion = tipoIdentificacion;
    estudiante.numeroIdentificacion = this.formEstudiante.controls['numeroIdentificacion'].value;
    estudiante.nombre = this.formEstudiante.controls['nombre'].value;
    estudiante.apellido = this.formEstudiante.controls['apellido'].value;
    estudiante.fechaNacimiento = this.formEstudiante.controls['fechaNacimiento'].value;
    estudiante.tipoSangre = tipoSangre;

    this.servicioEstudiante.registrar(estudiante).subscribe(res => {
      this.toastr.success('Se ha registrado el estudiante', 'CORRECTO');
    }, error => {
      console.log("Ha ocurrido un error al registrar");
    })
  }

}
