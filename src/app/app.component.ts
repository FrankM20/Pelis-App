import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PeliculasService } from './service/peliculas.service'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  resultado:any;

  constructor(private activatedRoute: ActivatedRoute){
    
    this.activatedRoute.params.subscribe(data=>{
      this.resultado = data;
  });
  }
  
}
