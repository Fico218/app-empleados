import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Empleado } from "./empleado.model";

@Injectable()
export class DataServices{

    constructor(private httpClient:HttpClient){}

    cargarempleados(){

        return this.httpClient.get('https://mis-clientes-1d810-default-rtdb.firebaseio.com/datos.json')
    }

    guardarEmpleados(empleados:Empleado[]){

        this.httpClient.put('https://mis-clientes-1d810-default-rtdb.firebaseio.com/datos.json',empleados).subscribe(

            response=>console.log("Se han guardado los empleados: " + response),

            error=>console.log("Error: " + error),
            
        );

    }

    actualizarEmpleado(indice:number, empleado:Empleado){

        let url='https://mis-clientes-1d810-default-rtdb.firebaseio.com/datos/' + indice + '.json';


        this.httpClient.put(url,empleado).subscribe(

            response=>console.log("Se ha modificado correctamente el empleado: " + response),

            error=>console.log("Error: " + error),
            
        );

    }

}