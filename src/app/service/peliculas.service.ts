import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  private apiKey:string ="6978349175846534367ac6a789f7685f";
  private urlMoviedb: string = "https://api.themoviedb.org/3";

  peliculas:any[] =[];


  constructor(private _http: HttpClient) { }

  private getURL(request: string, language: string) : Observable<Object>{
    let url =`${this.urlMoviedb}${request}&api_key=${this.apiKey}&language=${language}`;

    return this._http.jsonp(url, 'callback=JSONP_CALLBACK').pipe(map(res => res['results']));
  }

  public getPopulares() : Observable<Object>{
    const request = '/discover/movie?sort_by=popularity.desc';
    return this.getURL(request, 'es');
  }

  public getPeliculasCartelera() : Observable<Object>{

    let desde = new Date();
    let hasta = new Date();

    hasta.setDate(hasta.getDate() + 7);

    //Asignandole la fecha
    let desdeStr = `${desde.getFullYear()}-${desde.getMonth() + 1}-${desde.getDate()}`;
    let hastaStr = `${hasta.getFullYear()}-${hasta.getMonth() + 1}-${hasta.getDate()}`;

    const request = `/discover/movie?primary_release_date.gte=${desdeStr}&primary_release_date.lte=${hastaStr}`;
    return this.getURL(request, 'es');
  }

  public getPeliculasInfantiles() : Observable<Object>{
    const request = '/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc';
    return this.getURL(request, 'es');
  }

  
  public buscarPelicula(texto : any) : Observable<Object>{
    const request= `/search/movie?query=${texto}&sort_by=popularity.desc`;
    let url =`${this.urlMoviedb}${request}&api_key=${this.apiKey}&language=es`;

    return this._http.jsonp(url, 'callback=JSONP_CALLBACK').pipe(map(res => {
      this.peliculas = res['results'];
      return res['results']; 
    }));
  }

  public buscarPorId(id:number){
    const request= `/movie/${id}?api_key=${this.apiKey}`;

    let url =`${this.urlMoviedb}${request}&language=es`;
    return this._http.jsonp(url, 'callback=JSONP_CALLBACK').pipe(map(res => res));
  }
}
