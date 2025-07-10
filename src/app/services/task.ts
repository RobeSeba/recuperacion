import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Task {
  private apiUrlTareas:string="https://prueba-api-p3nn.onrender.com/api/tareas";

  constructor(private http:HttpClient) {
    
   }

  public getDataTareas(): Observable<any>{
    return this.http.get(this.apiUrlTareas);
  }

  public eliminarTarea(id:number): Observable<any>{
    const url = `${this.apiUrlTareas}/${id}`;
    return this.http.delete(url);
  }

  public registrarTarea(nombre:String , estado:String):Observable<any>{
    return this.http.post(this.apiUrlTareas,{
      nombre:nombre,
      estado:estado
    })
  }

}
