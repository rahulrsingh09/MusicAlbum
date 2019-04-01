import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MusicAlbumComponent } from './music-album.component';

describe('MusicAlbumComponent', () => {
  let fixture;
  let component;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MusicAlbumComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(MusicAlbumComponent);
    component = fixture.componentInstance;

  }));

  it('should create the component', async(() => {
    expect(component).toBeTruthy();
  }));
});
