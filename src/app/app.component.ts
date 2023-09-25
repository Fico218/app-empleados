import { Component, OnInit } from '@angular/core';

import firebase from 'firebase/compat/app';
import { LoginService } from './login/login.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html', 
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  titulo(titulo: any) {
    throw new Error('Method not implemented.');
  }
 // titulo = 'Listado de Empleados';

  constructor(private loginService:LoginService){


  }

  ngOnInit(): void {

    firebase.initializeApp({
    
    authoDomain: "mis-clientes-1d810",

    apiKey: "AIzaSyA19EyjuCpaPcdSXsoeo29YdLY6A7Gigx4",

    }); 
   
  }

  estaLogueado(){

    return this.loginService.estaLogueado(); 

  }

  logout(){

    this.loginService.logout(); 

  }

}
