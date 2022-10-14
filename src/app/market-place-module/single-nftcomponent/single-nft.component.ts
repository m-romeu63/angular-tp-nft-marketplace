import { Component, OnInit, Input } from '@angular/core';
import {Nft} from '../nfts.model';

@Component({
  selector: 'app-single-nftcomponent',
  templateUrl: './single-nft.component.html',
  styleUrls: ['./single-nft.component.scss']
})
export class SingleNFTComponent implements OnInit {

  @Input()
  public nft: Nft = {}

  constructor() { }

  ngOnInit(): void {
  }

  //permet de récupérer la valeur modifiée de nft.isFavorite au clic du bouton newFavorite = favorite de favorite-nft
  onFavoriteChange(newFavorite: boolean){
    this.nft.isFavorite = newFavorite;
  }

}
