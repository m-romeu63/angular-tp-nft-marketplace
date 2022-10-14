import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SingleNFTComponent } from './single-nftcomponent/single-nft.component';



@NgModule({
  declarations: [
    SingleNFTComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SingleNFTComponent
  ]
})
export class MarketPlaceModule { }
