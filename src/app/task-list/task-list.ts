import { Component, OnInit } from '@angular/core';
import { Task } from '../services/task';

@Component({
  selector: 'app-task-list',
  imports: [],
  templateUrl: './task-list.html',
  styleUrl: './task-list.css'
})
export class TaskList implements OnInit {
  data:any =[]

  constructor( private api:Task ){
    
  }

  ngOnInit(): void {
    this.llenardata()
  }

  llenardata(){
    this.api.getDataTareas().subscribe(res=>{
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
