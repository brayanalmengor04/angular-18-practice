import { Component, NgModule, OnInit } from '@angular/core';
import { TareaService } from './tarea.service'; // Importo el servicio para poder utilizarlo abajo 
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModel } from '@angular/forms'; 
@Component({ 
  selector: 'app-root',
  standalone: true, 
  templateUrl: './app.component.html',
  styleUrl: './app.component.css' ,
  imports: [FormsModule] // Si voy a usar ngModule debo importarlo en el components
})  

export class AppComponent implements OnInit { 
  nuevaTarea: string = '';  // Variable para la nueva tarea
  tareas: string[] = [];  // Lista de tareas 
  
  // Inyecto el servicio para utilizarlo  (aqui podria usar los servicios de Spring Boot por ejemplo )
    constructor(private tareaServicio : TareaService){} 
    // Para inicializar todo 
    ngOnInit(): void {
        // Obtengo las tareas del servicio 
        this.tareas = this.tareaServicio.obtenerTareas();    
    }
    agregarTarea():void{
      if(this.nuevaTarea) {
         this.tareaServicio.agregarTarea(this.nuevaTarea);  
         this.nuevaTarea='';
      }
    } 
    // Eliminar Tarea
    eliminarTarea(index:number):void{
      this.tareaServicio.eliminarTarea(index);
    }
    // Actualizar la tarea
    actualizarTarea(index:number):void{ 
      const nuevaTarea = prompt('Editar tarea', this.tareas[index]);
      if (nuevaTarea) {
        this.tareaServicio.actualizarTarea(index, nuevaTarea);  // Edita la tarea
      }
    }

}
