import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PeliculasService } from '../../service/peliculas.service';

@Component({
  selector: 'app-info-pelicula',
  templateUrl: './info-pelicula.component.html',
  styles: []
})
export class InfoPeliculaComponent implements OnInit {

  pelicula: any;
  route: string ="";
  busqueda:string ="";

  constructor(public service:PeliculasService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(data=>{

      this.route = data['pag'];

      if(data['paramBusqueda']){
        this.busqueda = data['paramBusqueda'];
      }

      console.log(this.route);
      this.service.buscarPorId(data['id']).subscribe(pelicula=>this.pelicula = pelicula)
    });

  }


}
