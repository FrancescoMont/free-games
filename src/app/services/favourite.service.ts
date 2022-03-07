/* eslint-disable @typescript-eslint/naming-convention */
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment2 } from 'src/environments/environment';
import { RootObject } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class FavouriteService {

  constructor(public http: HttpClient) { }

  getFavourites = () =>this.http.get<RootObject[]>(`${environment2.host}`).toPromise();

  addToFavourites = (favGame: RootObject) =>this.http.post<void>(`${environment2.host}/favourites`, favGame,{}).toPromise();
}
