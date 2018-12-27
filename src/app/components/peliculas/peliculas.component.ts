import { Component, OnInit, Input } from '@angular/core';
import { PeliculasService } from '../../service/peliculas.service';
import {Router} from '@angular/router'; 

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styles: []
})
export class PeliculasComponent implements OnInit {

  @Input() peliculas: any;
  @Input() titulo: string;

  constructor(public service: PeliculasService, private router : Router) {
      this.service.peliculas = [];
   }

  ngOnInit() {
  }

  enviarId(id: number){
    this.router.navigate(['/info',id,'/home']);
  }

}
