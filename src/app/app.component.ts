import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ]
})
export class AppComponent  {
  
  static MUSIC_ICON = "https://img.icons8.com/metro/26/000000/musical-notes.png";
  musicIcon : string = AppComponent.MUSIC_ICON;

}
