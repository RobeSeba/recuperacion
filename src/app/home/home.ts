import { Component, OnInit } from '@angular/core';
import { Api } from '../services/api';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home implements OnInit {
 data:any =[]

  constructor( private api:Api ){
    this.api.getData().subscribe(res=>{
      this.data = res.data;
      console.log(this.data)
    })
  }

  ngOnInit(): void {
    this.llenardata()
  }

  llenardata(){}
}
