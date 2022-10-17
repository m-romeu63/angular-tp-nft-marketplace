import { Routes } from '@angular/router';
import { NftListComponent } from './market-place-module/nft-list/nft-list.component';
import { NftDescriptionComponent } from './market-place-module/nft-description/nft-description.component';

export const ROUTES : Routes = [
  {path: '', component: NftListComponent},
  {path: 'description/:blockchain/:contractId/:token', component: NftDescriptionComponent}
]
