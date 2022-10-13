import { Component, OnInit } from '@angular/core';
import {Nft} from '../nfts.model';

@Component({
  selector: 'app-single-nftcomponent',
  templateUrl: './single-nftcomponent.component.html',
  styleUrls: ['./single-nftcomponent.component.scss']
})
export class SingleNFTComponentComponent implements OnInit {

  public nft: Nft = {
    chain: 'ethereum',
    contract_address: '0x248a74f64bbf422dae243ed5d58ef0dd7298b972',
    token_id: '4099',
    metadata_url: 'https://arweave.net/k_vClfQ1abuvq5Og5j3GEkGJ9fMRV7QJKKMy1zNYMm8/4099.json',
    metadata: {
      name: 'Lofi Lofts #4099',
      description: 'A project about places seen and unseen, liminal spaces merging the comfortable and the fantastical.A collection of 5,555 fantasy homes hand-drawn in a unique lofi aesthetic by OK_Cancel.',
      image: 'ipfs://QmY1FVLcj94mJ5T4EWB5MnT7oX9YkVt3MFPKgaCCF6jq4e/111.png',
      dna: 'e4ddecc8a6de124208f3eff964e8c025c480c6ee',
      edition: 4099,
      date: 1664972292055
    },
    file_url: 'https://arweave.net/ddddLbBS47vbC5gzb8eeWgziNtbumkeeIvuJRacV8dw/4099.png',
    mint_date: new Date('2022-10-07T09:33:35'),
    updated_date: new Date('2022-10-07T09:38:04.190486'),
    cached_file_url: 'https://storage.googleapis.com/sentinel-nft/raw-assets/3e3e95e0f7d2190b10acb359922303ee7df1a84dff01ec70d0ce77e96d198d5f.png',
    isFavorite : false,
    price: 0.898
  }

  constructor() { }

  ngOnInit(): void {
  }

}
