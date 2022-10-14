import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-favorite-nft',
  templateUrl: './favorite-nft.component.html',
  styleUrls: ['./favorite-nft.component.scss']
})
export class FavoriteNftComponent implements OnInit {

  //permet de récupérer favorite dans single-nftcomponent
  @Input()
  public favorite: boolean | undefined = false;

  //permet de pouvoir faire passer la valeur de favoriteChange dans d'autres fichiers sous forme d'event
  @Output()
  public favoriteChange = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  addToFavorite(): void {
    //je modifie la valeur de favorite selon sa valeur de départ et j'utilise un ternaire plutôt qu'un if...else
    this.favorite ? this.favorite = false : this.favorite = true;
    //j'émets la nouvelle valeur de favorite dans une variable diff pour la faire passer aux autres composants
    this.favoriteChange.emit(this.favorite);
  }

}
