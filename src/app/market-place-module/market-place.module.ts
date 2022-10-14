import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SingleNFTComponent } from './single-nftcomponent/single-nft.component';
import { NftPriceComponent } from './nft-price/nft-price.component';
import { FavoriteNftComponent } from './favorite-nft/favorite-nft.component';
import { NftListComponent } from './nft-list/nft-list.component';



@NgModule({
  declarations: [
    SingleNFTComponent,
    NftPriceComponent,
    FavoriteNftComponent,
    NftListComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SingleNFTComponent,
    NftPriceComponent,
    FavoriteNftComponent,
    NftListComponent
  ]
})
export class MarketPlaceModule { }
