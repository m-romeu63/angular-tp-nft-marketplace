import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MarketPlaceModule } from './market-place-module/market-place.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MarketPlaceModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
