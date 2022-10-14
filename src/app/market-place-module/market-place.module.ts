import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SingleNFTComponent } from './single-nftcomponent/single-nft.component';
import { NftPriceComponent } from './nft-price/nft-price.component';



@NgModule({
  declarations: [
    SingleNFTComponent,
    NftPriceComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SingleNFTComponent,
    NftPriceComponent
  ]
})
export class MarketPlaceModule { }
