import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SingleNFTComponentComponent } from './single-nftcomponent/single-nftcomponent.component';



@NgModule({
  declarations: [
    SingleNFTComponentComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SingleNFTComponentComponent
  ]
})
export class MarketPlaceModuleModule { }
