import { Injectable } from "@angular/core"; 
import { Empleado } from "./empleado.model";
import { ServicioEmpleadosService } from "./servicio-empleados.service";
import { DataServices } from "./data.services";

@Injectable()
export class EmpleadosService{

    constructor(private servicioVentanaEmergente: ServicioEmpleadosService, private dataService:DataServices){

    }

    setEmpleados(misEmpleados:Empleado[]){

        this.empleados=misEmpleados;
        
    }

    obtenerEmpleados(){

        return this.dataService.cargarempleados();
    }

    empleados:Empleado[]=[];

    agregarEmpleadoServicio(empleado:Empleado){

        this.servicioVentanaEmergente.muestraMensaje("Persona que se va a agregar: " + "\n" + 
        empleado.nombre + "\n" + "Salario: " + empleado.salario); 

        this.empleados.push(empleado); 

        this.dataService.guardarEmpleados(this.empleados);

    }
    encontrarEmpleado(indice:number){

        let empleado:Empleado=this.empleados[indice];

        return empleado;

    }

    actualizarEmpleado(indice:number, empleado:Empleado){

        let empleadoModificado=this.empleados[indice];

        empleadoModificado.nombre=empleado.nombre;
        empleadoModificado.apellido=empleado.apellido;
        empleadoModificado.cargo=empleado.cargo;
        empleadoModificado.salario=empleado.salario;

        this.dataService.actualizarEmpleado(indice,empleado);
    }

    eliminarEmpleado(indice:number){

        this.empleados.splice(indice,1);

    }
    
}

// function Injectable(target: typeof EmpleadosService): void | typeof EmpleadosService {
 //    throw new Error("Function not implemented.");

// }