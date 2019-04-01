import {Component, OnInit } from '@angular/core';
import { MusicAlbumModel } from '../music-album.model.interface';
import { MusicAlbumRestService } from '../services/music-album-rest.service';

@Component({
  selector: 'music-album',
  templateUrl: './music-album.component.html',
  styleUrls: ['./music-album.component.scss'],
})
export class MusicAlbumComponent implements OnInit {
  static BUY_NOW_URL = "https://images-na.ssl-images-amazon.com/images/G/01/associates/remote-buy-box/buy6.gif";

  musicAlbums: MusicAlbumModel[];
  buyFrom: string = MusicAlbumComponent.BUY_NOW_URL;
  loading: boolean ;
  constructor(private musicAlbumRestService : MusicAlbumRestService){}
  
  ngOnInit(){
    this.loading = true;
    this.musicAlbumRestService.getMusicAlbums().subscribe(data => {
      this.musicAlbums = data;
      this.loading = false;  
    });   
  }




}