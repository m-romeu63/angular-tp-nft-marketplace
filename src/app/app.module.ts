import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MarketPlaceModuleModule } from './market-place-module/market-place-module.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MarketPlaceModuleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
