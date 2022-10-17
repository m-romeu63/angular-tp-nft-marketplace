import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Nfts } from './market-place-module/nfts.model';
import { SingleNft } from './market-place-module/nfts.model';
import {environment} from "../environments/environment";

@Injectable({
  providedIn: 'root',
})
export class NftListService {
  constructor(private http: HttpClient) {}

  public getAll(): Observable<HttpResponse<Nfts>> {
    const headers = new HttpHeaders().set('Authorization',environment.apiKey);
    const params = new HttpParams().set('chain', 'ethereum').set('include', 'all').set('page_size', 20);

    return this.http.get<Nfts>(`${environment.baseUrl}/nfts/${environment.contractId}`, {headers,params,observe: 'response',});
  }

  public getOne(blockchain: string, contractId: string, token: string): Observable<HttpResponse<SingleNft>> {
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', environment.apiKey);
    const params = new HttpParams()
      .set('chain', blockchain)
    return this.http.get<SingleNft>(`${environment.baseUrl}/nfts/${contractId}/${token}`,
      {headers, params, observe: 'response'});
  }
}
