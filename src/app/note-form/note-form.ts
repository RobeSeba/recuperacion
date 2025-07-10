import { Component } from '@angular/core';
import { Note } from '../services/note';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-note-form',
  imports: [RouterLink],
  templateUrl: './note-form.html',
  styleUrl: './note-form.css'
})
export class NoteForm {
  constructor( private apiNote:Note){

  }

  public registrarNotas(event: Event,titulo:string, contenido:string
    ,fechaInicioString: string, fechaActualizacionString: string){
    event.preventDefault();
    console.log('Nombre capturado:', titulo);
     console.log('contenido capturado:', contenido);
     console.log('inicio capturado:', fechaInicioString);
     console.log('final capturado:', fechaActualizacionString);

    // Convertir las fechas a string en formato YYYY-MM-DD
    const fechaInicioFormatted = new Date(fechaInicioString).toISOString().split('T')[0];
    const fechaActualizacionFormatted = new Date(fechaActualizacionString).toISOString().split('T')[0];

    this.apiNote.registrarTarea(titulo, contenido, fechaInicioFormatted, fechaActualizacionFormatted).subscribe({
      next: (res) => {

        console.log(res);
       // window.location.reload(); // Comentado para evitar recarga automática durante desarrollo
    },
    error: (error) => {
        console.error(error);
      },
    complete: () => {
      console.log('Registro de Nota completado');
    }
  });
  }

  public saludar(event: Event) {
    event.preventDefault(); // Previene el comportamiento por defecto del formulario
    console.log('Función saludar llamada');
    // Aquí iría tu lógica para registrar la tarea
  }
}
