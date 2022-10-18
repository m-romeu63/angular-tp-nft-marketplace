import { Routes } from '@angular/router';
import { NftListComponent } from './market-place-module/nft-list/nft-list.component';
import { NftDescriptionComponent } from './market-place-module/nft-description/nft-description.component';
import { LoginComponent } from './market-place-module/login/login.component';
import { RegisterComponent } from './market-place-module/register/register.component';
import { LogGuard } from './log.guard';

export const ROUTES : Routes = [
  {path: '', component: NftListComponent},
  {path: 'description/:blockchain/:contractId/:token', component: NftDescriptionComponent, canActivate: [LogGuard]},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent}
]
