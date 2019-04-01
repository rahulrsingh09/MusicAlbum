import {Injectable} from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable, throwError } from 'rxjs';
import { MusicAlbumModel } from '../music-album.model.interface';
import { retry, catchError } from 'rxjs/operators';

@Injectable()
export class MusicAlbumRestService {
  
  static MUSIC_ALBUM_URL ="https://rallycoding.herokuapp.com/api/music_albums";

  constructor(private client: HttpClient){  }

  getMusicAlbums(): Observable<any>{
    return this.client.get<MusicAlbumModel[]>(MusicAlbumRestService.MUSIC_ALBUM_URL).pipe(
       retry(1),
       catchError(this.handleError)
     );
  }

  handleError(error) {
   let errorMessage = '';
   if (error.error instanceof ErrorEvent) {
     errorMessage = `Error: ${error.error.message}`;
   } else {
     errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
   }
   console.log(errorMessage);
   return throwError('No data Found');
 }
}