import { Injectable } from '@angular/core';


// Esto es un archivo de servicio aqui puedo serparar la logica de programacion-------------
@Injectable({
  providedIn: 'root'
})
export class TareaService {

  // Servicio tareas arreglo
  private tareas : string[]=[]; 
  // Metodo para obtener el arreglo de tareas 
  //name : return que cosa
  obtenerTareas():string[]{
      return this.tareas;
  }
  // Llamo al arreglo de string y lo agrego 
  agregarTarea(tarea : string):void{
      this.tareas.push(tarea);
  }
  // Elimina la tarea --Por escribir 
  eliminarTarea(index:number):void{
    this.tareas.splice(index, 1); 
  }

  // Aqui actualizo la tarea 
  actualizarTarea(index:number ,nuevaTarea:string):void{
      this.tareas[index] = nuevaTarea;
  }

  constructor() { } 


}
