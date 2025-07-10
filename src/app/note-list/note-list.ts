import { Component, OnInit } from '@angular/core';
import { Note } from '../services/note';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-note-list',
  imports: [CommonModule,RouterLink],
  templateUrl: './note-list.html',
  styleUrl: './note-list.css'
})
export class NoteList implements OnInit {
  data:any =[]

  constructor( private api:Note ){
    
  }

  ngOnInit(): void {
    this.llenardata()
  }

  llenardata(){
    this.api.getDataNotas().subscribe(res=>{
      this.data = res.data;
      console.log(this.data)
    })
  }

  eliminarTarea(id:number){
    this.api.eliminarTarea(id).subscribe(res=>{
      this.llenardata();
    },
    (error)=>{
      console.error(error)
    })
  }
}
