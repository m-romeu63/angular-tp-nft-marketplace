import { Component, OnInit } from '@angular/core';
import { NftListService } from 'src/app/nft-list.service';
import { Nft } from '../nfts.model';
import {filter, map, tap} from "rxjs";

@Component({
  selector: 'app-nft-list',
  templateUrl: './nft-list.component.html',
  styleUrls: ['./nft-list.component.scss']
})
export class NftListComponent implements OnInit {
  public nfts: Array<Nft> | null = new Array<Nft>();

  constructor(private nftListService: NftListService) {
  }

  ngOnInit(): void {
    this.nftListService.getAll().subscribe(response => {
      this.nfts = response.body!.nfts;
    })
  }

}
