import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Task } from '../services/task';

@Component({
  selector: 'app-task-form',
  imports: [RouterLink],
  templateUrl: './task-form.html',
  styleUrl: './task-form.css'
})
export class TaskForm {

  constructor( private apitask:Task){

  }

  public registrarTareas(event: Event,nombre:string, estado:string){
    event.preventDefault();
    console.log('Nombre capturado:', nombre);
     console.log('Estado capturado:', estado);

    this.apitask.registrarTarea(nombre, estado).subscribe({
      next: (res) => {
        console.log(res);
        window.location.reload();
      },
      error: (error) => {
        console.error(error);
      },
      complete: () => {
        console.log('Registro de tarea completado');
      }
    });
  }

  public saludar(event: Event) {
    event.preventDefault(); // Previene el comportamiento por defecto del formulario
    console.log('Función saludar llamada');
    // Aquí iría tu lógica para registrar la tarea
  }
}
