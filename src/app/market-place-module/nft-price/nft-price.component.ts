import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-nft-price',
  templateUrl: './nft-price.component.html',
  styleUrls: ['./nft-price.component.scss']
})
export class NftPriceComponent implements OnInit {
  @Input() price: number|undefined = 0;

  constructor() {
  }

  ngOnInit(): void {
  }

}
