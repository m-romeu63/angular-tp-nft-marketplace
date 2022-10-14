import { Component, OnInit } from '@angular/core';
import { NftListService } from 'src/app/nft-list.service';
import { Nft } from '../nfts.model'

@Component({
  selector: 'app-nft-list',
  templateUrl: './nft-list.component.html',
  styleUrls: ['./nft-list.component.scss']
})
export class NftListComponent implements OnInit {
  nfts: Array<Nft>;

  constructor(private nftListService: NftListService) {
    this.nfts = nftListService.getAll();
  }

  ngOnInit(): void {
  }

}
