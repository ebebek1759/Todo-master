import { Component, OnInit } from '@angular/core';
import { PagingInfo } from '../models/pagingInfo';
import { AlbumService } from '../services/album.service';
import { FavoriteService } from '../services/favorite.service';
import { Album } from './album';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css'],
})
export class AlbumComponent implements OnInit {
  albums: Album[] = [];
  pagingInfo: PagingInfo = { itemsPerPage: 10, currentPage: 1 };

  constructor(
    private albumService: AlbumService,
    private favoriteService: FavoriteService
  ) {}

  ngOnInit(): void {
    this.albumService.getAlbums().subscribe((data) => {
      this.albums = data;
    });
  }

  addToFavorite(album: Album) {
    this.favoriteService.addToFavorite(album);
  }
}
