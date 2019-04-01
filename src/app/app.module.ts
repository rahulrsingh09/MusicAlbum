import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; 

import { AppComponent } from './app.component';
import { MusicAlbumComponent } from './music-album/music-album.component';
import { MusicAlbumRestService } from './services/music-album-rest.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpClientModule  ],
  declarations: [ AppComponent, MusicAlbumComponent ],
  bootstrap:    [ AppComponent ],
  providers:    [ MusicAlbumRestService ]
})
export class AppModule { }
