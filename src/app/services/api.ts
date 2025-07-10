import { HttpClient } from '@angular/common/http';
import { Injectable} from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Api  {

  private apiUrl:string ="https://api-f7t7.onrender.com/estudiantes";

  constructor(private http:HttpClient ) { }

  public getData(): Observable<any>{
    return this.http.get(this.apiUrl);
  }

}
