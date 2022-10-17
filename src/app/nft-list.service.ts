import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Nfts } from './market-place-module/nfts.model';
import {environment} from "../environments/environment";

@Injectable({
  providedIn: 'root',
})
export class NftListService {
  constructor(private http: HttpClient) {}

  public getAll(): Observable<HttpResponse<Nfts>> {
    const headers = new HttpHeaders().set('Authorization',environment.apiKey);
    const params = new HttpParams().set('chain', 'ethereum').set('include', 'all').set('page_size', 20);

    return this.http.get<Nfts>(`${environment.baseUrl}/nfts/0x248a74f64bbf422dae243ed5d58ef0dd7298b972`, {headers,params,observe: 'response',});
  }
}
