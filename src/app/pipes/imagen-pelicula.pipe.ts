import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imagenPelicula'
})
export class ImagenPeliculaPipe implements PipeTransform {

  transform(value: string, poster_path:string): string {

    let url:string;

    if(value != null){
      url = `http://image.tmdb.org/t/p/w500${value}`;
    }
    else if(poster_path != null){
      url = `http://image.tmdb.org/t/p/w500${poster_path}`
    }
    else{
      url = '././assets/img/noimage.png';
    }
    
    return url;

  }
}