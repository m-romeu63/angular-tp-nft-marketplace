import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-favorite-nft',
  templateUrl: './favorite-nft.component.html',
  styleUrls: ['./favorite-nft.component.scss']
})
export class FavoriteNftComponent implements OnInit {

  @Input()
  public favorite: boolean | undefined = false;

  @Output()
  public favoriteChange = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  addToFavorite(): void {
    this.favorite ? this.favorite = false : this.favorite = true;
    this.favoriteChange.emit(this.favorite);
  }

}
