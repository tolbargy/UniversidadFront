import { TipoIdentificacion } from "./tipo-identificacion";
import { TipoSangre } from "./tipo-sangre";

export class Estudiante {
    public id: number;
    public numeroIdentificacion: string;
    public nombre: string;
    public apellido: string;
    public fechaNacimiento: Date;
    public tipoIdentificacion: TipoIdentificacion;
    public tipoSangre: TipoSangre;
}
