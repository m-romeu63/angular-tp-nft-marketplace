import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { filter, switchMap } from 'rxjs';
import { NftListService } from 'src/app/nft-list.service';
import { Nft } from '../nfts.model';

@Component({
  selector: 'app-nft-description',
  templateUrl: './nft-description.component.html',
  styleUrls: ['./nft-description.component.scss'],
})
export class NftDescriptionComponent implements OnInit {
  public nft: Nft = {};

  constructor(
    private nftListService: NftListService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        switchMap(params => this.nftListService.getOne(params['blockchain'], params['contractId'], params['token']))
      )
      .subscribe((res) => {
        this.nft = res.body!.nft;
      })
  }
}
