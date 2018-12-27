import { Component, OnInit, Input } from '@angular/core';
import {Router} from '@angular/router'; 

@Component({
  selector: 'app-resultado-busqueda',
  templateUrl: './resultado-busqueda.component.html',
  styles: []
})
export class ResultadoBusquedaComponent implements OnInit {

@Input() resultadoBusqueda:any[] =[];

  constructor(private router : Router) { 
    console.log(this.resultadoBusqueda);
  }

  ngOnInit() {
  }

  enviarId(id: number){
    this.router.navigate(['/info',id]);
  }

}
