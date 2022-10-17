export interface ContractMetadata {
  description?: string;
  thumbnail_url?: string;
  cached_thumbnail_url?: string;
  banner_url?: string;
  cached_banner_url?: string;
}

export interface Contract {
  name?: string;
  symbol?: string;
  type?: string;
  metadata?: ContractMetadata;
}

export interface Attribute {
  trait_type?: string;
  value?: any;
  display_type?: string;
}

export interface File {
  uri?: string;
  type?: string;
}

export interface Creator {
  address?: string;
  share?: number;
}

export interface Properties {
  edition?: number;
  files?: File[];
  category?: string;
  creators?: Creator[];
}

export interface NftMetadata {
  name?: string;
  description?: string;
  image?: string;
  dna?: string;
  edition?: number;
  date?: number;
  attributes?: Attribute[];
  compiler?: string;
  background_image?: string;
  image_url?: string;
  is_normalized?: boolean;
  name_length?: number;
  segment_length?: number;
  url?: string;
  version?: number;
  animation_url?: string;
  arweave?: string;
  collection?: string;
  external_url?: string;
  ipfs?: string;
  sha256?: string;
  fee_recipient?: string;
  seller_fee_basis_points?: string;
  symbol?: string;
  properties?: Properties;
}

export interface FileInformation {
  height?: number;
  width?: number;
  file_size?: number;
}

export interface Nft {
  chain?: string;
  contract_address?: string;
  token_id?: string;
  contract?: Contract;
  metadata?: NftMetadata;
  metadata_url?: string;
  file_url?: string;
  animation_url?: string;
  cached_file_url?: string;
  cached_animation_url?: string;
  mint_date?: Date;
  file_information?: FileInformation;
  updated_date?: Date;
  isFavorite?: boolean;
  price?: number;
  owner?: string
}

export interface Nfts {
  response: string;
  nfts: Nft[];
  continuation: string;
}

export interface SingleNft {
  response: string;
  nft: Nft;
}
