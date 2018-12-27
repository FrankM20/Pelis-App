import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../../service/peliculas.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  cartelera:any;
  populares: any;
  infantiles: any;

  constructor(private service : PeliculasService) {
    this.service.getPeliculasCartelera().subscribe(data=>this.cartelera = data);

    this.service.getPopulares().subscribe(data=>this.populares = data);

    this.service.getPeliculasInfantiles().subscribe(data=>{
      console.log("infantiles");
      console.log(data);
      this.infantiles = data;
    });
  }

  ngOnInit() {

  }

  
}
