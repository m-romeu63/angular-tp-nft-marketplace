import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NftModule } from './nft/nft.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NftModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
