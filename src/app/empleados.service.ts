import { Empleado } from "./empleado.model";

export class EmpleadosService{


    empleados:Empleado[]=[

        new Empleado("Juan", "Díaz", "Presidente", 7500),
        new Empleado("Ana", "Martin", "Directora", 5500),
        new Empleado("Maria", "Fernandez", "Jefa Sección", 3500),
        new Empleado("Laura", "Aragon", "Administrativo", 2500),

    ];

    agregarEmpleadoServicio(empleado:Empleado){

        this.empleados.push(empleado); 

    }
    
}