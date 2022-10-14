import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MarketPlaceModule } from './market-place-module/market-place.module';
import { AppComponent } from './app.component';
import { NftListService } from './nft-list.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MarketPlaceModule
  ],
  providers: [
    NftListService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
