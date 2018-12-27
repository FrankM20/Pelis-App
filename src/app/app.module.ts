import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';

//Servicio
import { PeliculasService } from './service/peliculas.service'; 

//router
import{APP_ROUTING} from './app.routes';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { BuscarComponent } from './components/busqueda/buscar.component';
import { PeliculasComponent } from './components/peliculas/peliculas.component';
import { InfoPeliculaComponent } from './components/info-pelicula/info-pelicula.component';


import { ImagenPeliculaPipe } from './pipes/imagen-pelicula.pipe';
import { ResultadoBusquedaComponent } from './components/shared/resultado-busqueda/resultado-busqueda.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    BuscarComponent,
    ImagenPeliculaPipe,
    PeliculasComponent,
    InfoPeliculaComponent,
    ResultadoBusquedaComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpClientJsonpModule,
    FormsModule,
    APP_ROUTING
  ],
  providers: [
    PeliculasService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
