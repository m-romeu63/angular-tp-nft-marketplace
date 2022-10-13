import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SingleNftComponent } from './single-nft/single-nft.component';



@NgModule({
  declarations: [
    SingleNftComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SingleNftComponent
  ]
})
export class NftModule { }
