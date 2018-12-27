import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../../service/peliculas.service';
import { Router, ActivatedRoute } from '@angular/router'; 

@Component({
  selector: 'app-busqueda',
  templateUrl: './buscar.component.html',
  styles: []
})
export class BuscarComponent implements OnInit {

buscar: string;
busqueda:any;
texto = "";

  constructor(public service: PeliculasService, private router : Router, private activatedR : ActivatedRoute) { 

    this.activatedR.params.subscribe(data=>{
      
        this.buscar = data['texto'];
        this.buscarPelicula();

    });
  }

  ngOnInit() {
  }

  buscarPelicula(){
    console.log(this.buscar);
    this.service.buscarPelicula(this.buscar).subscribe();
  }

  enviarId(id:number){
    this.router.navigate(['/info', id,'/busqueda', this.buscar]);
  }

}

//data=>{
  //this.busqueda = data;
  //console.log(this.busqueda);
  
