import { Injectable } from "@angular/core"; 
import { Empleado } from "./empleado.model";
import { ServicioEmpleadosService } from "./servicio-empleados.service";

@Injectable()
export class EmpleadosService{

    constructor(private servicioVentanaEmergente: ServicioEmpleadosService){

    }

    empleados:Empleado[]=[

        new Empleado("Juan", "Díaz", "Presidente", 7500),
        new Empleado("Ana", "Martin", "Directora", 5500),
        new Empleado("Maria", "Fernandez", "Jefa Sección", 3500),
        new Empleado("Laura", "Aragon", "Administrativo", 2500),

    ];

    agregarEmpleadoServicio(empleado:Empleado){

        this.servicioVentanaEmergente.muestraMensaje("Persona que se va a agregar: " + "\n" + 
        empleado.nombre + "\n" + "Salario: " + empleado.salario); 

        this.empleados.push(empleado); 

    }
    
}

// function Injectable(target: typeof EmpleadosService): void | typeof EmpleadosService {
 //    throw new Error("Function not implemented.");

// }