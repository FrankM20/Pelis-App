import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { BuscarComponent } from './components/busqueda/buscar.component';
import { InfoPeliculaComponent } from './components/info-pelicula/info-pelicula.component';

const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'busqueda', component: BuscarComponent },
    { path: 'busqueda/:texto', component: BuscarComponent },
    { path: 'info/:id/:pag', component: InfoPeliculaComponent },
    { path: 'info/:id/:pag/:paramBusqueda', component: InfoPeliculaComponent },
    { path: '**', pathMatch:'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(routes);