import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { MarketPlaceModule } from './market-place-module/market-place.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { ROUTES } from './app.routes';
import { NftDescriptionComponent } from './market-place-module/nft-description/nft-description.component';

@NgModule({
  declarations: [
    AppComponent,
    NftDescriptionComponent
  ],
  imports: [
    BrowserModule,
    MarketPlaceModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
