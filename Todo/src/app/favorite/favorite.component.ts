import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Album } from '../album/album';
import { FavoriteService } from '../services/favorite.service';
import { Favorite } from './favorite';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css'],
})
export class FavoriteComponent implements OnInit {
  favorites: Favorite[] = [];
  constructor(private favoriteService:FavoriteService,private toastrService:ToastrService) {}
  
  ngOnInit(): void {
    this.favorites = this.favoriteService.getFavorites()
  }

  removeFavorite(album:Album) {
    this.favoriteService.removeFavorite(album);
    this.toastrService.info("Favorilerden çıkartıldı", album.title)
  }
}
