import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Note {
  private apiNotas:string ="https://api-nota.onrender.com/api/notas";

  constructor(private http:HttpClient ) { }

  public getDataNotas(): Observable<any>{
    return this.http.get(this.apiNotas);
  }
  
  public eliminarTarea(id:number): Observable<any>{
    const url = `${this.apiNotas}/${id}`;
    return this.http.delete(url);
  }

  public registrarTarea(titulo:String , contenido:String,fechaInicio:String, fechaActualizacion:String):Observable<any>{
    return this.http.post(this.apiNotas,{
      titulo:titulo,
      contenido:contenido,
      fechaInicio:fechaInicio,
      fechaActualizacion:fechaActualizacion
    })
  }

}
