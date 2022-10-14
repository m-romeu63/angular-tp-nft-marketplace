import { Component, OnInit } from '@angular/core';
import { Nft } from '../nfts.model';

@Component({
  selector: 'app-nft-list',
  templateUrl: './nft-list.component.html',
  styleUrls: ['./nft-list.component.scss']
})
export class NftListComponent implements OnInit {

  public nfts: Array<Nft> = [
    {
      chain: 'ethereum',
      contract_address: "0x248a74f64bbf422dae243ed5d58ef0dd7298b972",
      token_id: "1",
      owner: '0x3e8fbae2a4638e98efc5081ef59e9b039a748cd5',
      metadata:
        {
          description: "Lofi Lofts is a project about places seen and unseen, liminal spaces merging the comfortable and the fantastical. A collection of 5,555 fantasy homes hand-drawn in a unique lofi aesthetic by OK_Cancel.",
          image: "https://arweave.net/9GIM0uTJiOgamdiWmidsVPwZrIcghGt3oIHBa_dfmcI",
          name: "Lofi Lofts"
        },
      metadata_url: "https://arweave.net/urud0dXUcP46dgJAa7xsr_yziNTnsAhnNROSobsgXSs",
      file_url: "https://arweave.net/9GIM0uTJiOgamdiWmidsVPwZrIcghGt3oIHBa_dfmcI",
      cached_file_url: "https://storage.googleapis.com/sentinel-nft/raw-assets/bb503ec941f16b21ddf5cda902f9b39affe3594fb1f71737c2c8adb15b733bc6.gif",
      mint_date: new Date('2022-08-25T13:39:05'),
      updated_date: new Date('2022-10-04T19:58:54.978896'),
      isFavorite: false,
      price: 0.292
    },
    {
      chain: "ethereum",
      contract_address: "0x248a74f64bbf422dae243ed5d58ef0dd7298b972",
      token_id: "10",
      owner: "0x802dbd98f9fb2c51b7bb450c215bec78cae0f67e",
      metadata:
        {
          attributes:
            [
              {
                trait_type: "Background",
                value: "Dune Night"
              },
              {
                trait_type: "Vehicle",
                value: "Hoverboard"
              },
              {
                trait_type: "Companion",
                value: "Worm"
              },
              {
                trait_type: "Basement",
                value: "Chocolate Icecream"
              },
              {
                trait_type: "Base",
                value: "White Toilet"
              }
            ],
          compiler: "HashLips Art Engine",
          date: 1664967060097,
          description: "A project about places seen and unseen, liminal spaces merging the comfortable and the fantastical.A collection of 5,555 fantasy homes hand-drawn in a unique lofi aesthetic by OK_Cancel.",
          dna: "86fb62430f410daee3aa57a4e764f0fb6ba12670",
          edition: 10,
          image: "https://arweave.net/ddddLbBS47vbC5gzb8eeWgziNtbumkeeIvuJRacV8dw/10.png",
          name: "Lofi Lofts #10"
        },
      metadata_url: "https://arweave.net/k_vClfQ1abuvq5Og5j3GEkGJ9fMRV7QJKKMy1zNYMm8/10.json",
      file_url: "https://arweave.net/ddddLbBS47vbC5gzb8eeWgziNtbumkeeIvuJRacV8dw/10.png",
      cached_file_url: "https://storage.googleapis.com/sentinel-nft/raw-assets/5350ec9da0544960922399e4707c865cde581c6c6541d02a0754d3f30a3bffd5.png",
      mint_date: new Date('2022-08-25T13:39:05'),
      file_information:
        {
          height: 2048,
          width: 2048,
          file_size: 3692748
        },
      updated_date: new Date('2022-10-08T22:41:07.918213'),
      isFavorite: false,
      price: 0.292
    },
    {
      chain: "ethereum",
      contract_address: "0x248a74f64bbf422dae243ed5d58ef0dd7298b972",
      token_id: "1000",
      owner: "0x0cfc091c15f04faab4414d825d15a6a24a451f60",
      metadata:
        {
          attributes:
            [
              {
                trait_type: "Background",
                value: "Orange Sky"
              },
              {
                trait_type: "Vehicle",
                value: "Bunny Hop"
              },
              {
                trait_type: "Companion",
                value: "Eyeball"
              },
              {
                trait_type: "Basement",
                value: "Green Hamsters"
              },
              {
                trait_type: "Base",
                value: "Mobius Strip"
              }
            ],
          compiler: "HashLips Art Engine",
          date: 1664968433980,
          description: "A project about places seen and unseen, liminal spaces merging the comfortable and the fantastical.A collection of 5,555 fantasy homes hand-drawn in a unique lofi aesthetic by OK_Cancel.",
          dna: "4dbb47f7d0cabf3749d7607d834c5c857dc35387",
          edition: 1000,
          image: "https://arweave.net/ddddLbBS47vbC5gzb8eeWgziNtbumkeeIvuJRacV8dw/1000.png",
          name: "Lofi Lofts #1000"
        },
      metadata_url: "https://arweave.net/k_vClfQ1abuvq5Og5j3GEkGJ9fMRV7QJKKMy1zNYMm8/1000.json",
      file_url: "https://arweave.net/ddddLbBS47vbC5gzb8eeWgziNtbumkeeIvuJRacV8dw/1000.png",
      cached_file_url: "https://storage.googleapis.com/sentinel-nft/raw-assets/42ecef6cc4cee850e7f8935c447c190eede632a9a964b8563bd22ae131a4905b.png",
      mint_date: new Date('2022-10-04T17:54:23'),
      file_information:
        {
          height: 2048,
          width: 2048,
          file_size: 4116321
        },
      updated_date: new Date('2022-10-07T18:40:13.304280'),
      isFavorite: false,
      price: 0.292
    },
    {
      chain: "ethereum",
      contract_address: "0x248a74f64bbf422dae243ed5d58ef0dd7298b972",
      token_id: "1001",
      owner: "0x7baf7ea604a2a47d8b6743706601ee80bd3e0737",
      metadata:
        {
          attributes:
            [
              {
                trait_type: "Background",
                value: "Iridiscent"
              },
              {
                trait_type: "Vehicle",
                value: "Helicopter"
              },
              {
                trait_type: "Companion",
                value: "Eyeball"
              },
              {
                trait_type: "Basement",
                value: "Library"
              },
              {
                trait_type: "Base",
                value: "Pink Milk"
              }
            ],
          compiler: "HashLips Art Engine",
          date: 1664968435184,
          description: "A project about places seen and unseen, liminal spaces merging the comfortable and the fantastical.A collection of 5,555 fantasy homes hand-drawn in a unique lofi aesthetic by OK_Cancel.",
          dna: "e9dc7a5a0454b8709f6de5bcaf1d43d2b29c8d3a",
          edition: 1001,
          image: "https://arweave.net/ddddLbBS47vbC5gzb8eeWgziNtbumkeeIvuJRacV8dw/1001.png",
          name: "Lofi Lofts #1001"
        },
      metadata_url: "https://arweave.net/k_vClfQ1abuvq5Og5j3GEkGJ9fMRV7QJKKMy1zNYMm8/1001.json",
      file_url: "https://arweave.net/ddddLbBS47vbC5gzb8eeWgziNtbumkeeIvuJRacV8dw/1001.png",
      cached_file_url: "https://storage.googleapis.com/sentinel-nft/raw-assets/56385bc8d494fd54adb38e95f4f052575bdefe6f7e917b7a90c61326f2e7d092.png",
      mint_date: new Date('2022-10-04T17:54:47'),
      file_information:
        {
          height: 2048,
          width: 2048,
          file_size: 5214015
        },
      updated_date: new Date('2022-10-08T05:05:20.935515'),
      isFavorite: false,
      price: 0.292
    },
    {
      chain: "ethereum",
      contract_address: "0x248a74f64bbf422dae243ed5d58ef0dd7298b972",
      token_id: "1002",
      owner: "0x5b7796f09d77cf53504d2b91bf10075816d5b25f",
      metadata:
        {
          attributes:
            [
              {
                trait_type: "Background",
                value: "Clear Pink Sky"
              },
              {
                trait_type: "Vehicle",
                value: "Blue BMX"
              },
              {
                trait_type: "Companion",
                value: "Blue Flower"
              },
              {
                trait_type: "Basement",
                value: "Futsal"
              },
              {
                trait_type: "Base",
                value: "Brutalist"
              }
            ],
          compiler: "HashLips Art Engine",
          date: 1664968436327,
          description: "A project about places seen and unseen, liminal spaces merging the comfortable and the fantastical.A collection of 5,555 fantasy homes hand-drawn in a unique lofi aesthetic by OK_Cancel.",
          dna: "d81435df7a797ea87390d02462ee42859d22f1e3",
          edition: 1002,
          image: "https://arweave.net/ddddLbBS47vbC5gzb8eeWgziNtbumkeeIvuJRacV8dw/1002.png",
          name: "Lofi Lofts #1002"
        },
      metadata_url: "https://arweave.net/k_vClfQ1abuvq5Og5j3GEkGJ9fMRV7QJKKMy1zNYMm8/1002.json",
      file_url: "https://arweave.net/ddddLbBS47vbC5gzb8eeWgziNtbumkeeIvuJRacV8dw/1002.png",
      cached_file_url: "https://storage.googleapis.com/sentinel-nft/raw-assets/26407bb304f3c5cf2af91dd9d81cb0971b0671a980637966d6e1ae885186e58e.png",
      mint_date: new Date('2022-10-04T17:54:47'),
      file_information:
        {
          height: 2048,
          width: 2048,
          file_size: 4556408
        },
      updated_date: new Date('2022-10-06T15:58:44.946765'),
      isFavorite: false,
      price: 0.292
    },
    {
      chain: "ethereum",
      contract_address: "0x248a74f64bbf422dae243ed5d58ef0dd7298b972",
      token_id: "1003",
      owner: "0xe7235a6616c1d794eb24c2c774e5d92c1f309d1b",
      metadata:
        {
          attributes:
            [
              {
                trait_type: "Background",
                value: "Iridiscent"
              },
              {
                trait_type: "Vehicle",
                value: "Flying Nimbus"
              },
              {
                trait_type: "Companion",
                value: "Mozzie"
              },
              {
                trait_type: "Basement",
                value: "Roman Statue"
              },
              {
                trait_type: "Base",
                value: "Blue Soda Can"
              }
            ],
          compiler: "HashLips Art Engine",
          date: 1664968437513,
          description: "A project about places seen and unseen, liminal spaces merging the comfortable and the fantastical.A collection of 5,555 fantasy homes hand-drawn in a unique lofi aesthetic by OK_Cancel.",
          dna: "1c0df7bac41ff41ee4564221a10779a9d5d93ca3",
          edition: 1003,
          image: "https://arweave.net/ddddLbBS47vbC5gzb8eeWgziNtbumkeeIvuJRacV8dw/1003.png",
          name: "Lofi Lofts #1003"
        },
      metadata_url: "https://arweave.net/k_vClfQ1abuvq5Og5j3GEkGJ9fMRV7QJKKMy1zNYMm8/1003.json",
      file_url: "https://arweave.net/ddddLbBS47vbC5gzb8eeWgziNtbumkeeIvuJRacV8dw/1003.png",
      cached_file_url: "https://storage.googleapis.com/sentinel-nft/raw-assets/e52b637e7cefa138c1948147b5fa28272b4c7d212d3f7a2d7769f7c3d1b8897e.png",
      mint_date: new Date('2022-10-04T17:54:47'),
      file_information:
        {
          height: 2048,
          width: 2048,
          file_size: 5226103
        },
      updated_date: new Date('2022-10-07T23:29:18.955235'),
      isFavorite: false,
      price: 0.292
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
