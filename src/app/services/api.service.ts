/* eslint-disable @typescript-eslint/naming-convention */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment, environment2 } from 'src/environments/environment';

export interface MinimumSystemRequirements {
  os: string;
  processor: string;
  memory: string;
  graphics: string;
  storage: string;
}

export interface Screenshot {
  id: number;
  image: string;
}

export interface DetailGame {
  id: number;
  title: string;
  thumbnail: string;
  status: string;
  short_description: string;
  description: string;
  game_url: string;
  genre: string;
  platform: string;
  publisher: string;
  developer: string;
  release_date: string;
  freetogame_profile_url: string;
  minimum_system_requirements: MinimumSystemRequirements | null;
  screenshots: Screenshot[];
}

export interface RootObject {
  id: number;
  title: string;
  thumbnail: string;
  short_description: string;
  game_url: string;
  genre: string;
  platform: string;
  publisher: string;
  developer: string;
  release_date: string;
  freetogame_profile_url: string;
}


@Injectable({
  providedIn: 'root'
})
export class ApiService {


  constructor(public http: HttpClient ) { }


  getGames = () => this.http.get('https://free-to-play-games-database.p.rapidapi.com/api/games', {
	      headers: {
		        'x-rapidapi-key': '52031b8c25msh1097711eb612e56p18f7adjsna3f81ce48e71'
  	      }
        }).toPromise();

  gameByPlatform = (platform: string) =>
      this.http.get(`https://free-to-play-games-database.p.rapidapi.com/api/games?platform=${platform}`, {
      headers: {
          'x-rapidapi-key': '52031b8c25msh1097711eb612e56p18f7adjsna3f81ce48e71'
        }
      }).toPromise();

  getSingleGame = (id: number) => this.http.get<DetailGame>(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`, {
    headers: {
      'x-rapidapi-key': '52031b8c25msh1097711eb612e56p18f7adjsna3f81ce48e71'
    }
  }).toPromise();

  multipleTags = (tag: string) =>this.http.get(`https://free-to-play-games-database.p.rapidapi.com/api/filter?tag=${tag}`,{headers: {
    'x-rapidapi-key': '52031b8c25msh1097711eb612e56p18f7adjsna3f81ce48e71'
  }}).toPromise();

  getFavourites = () =>this.http.get<RootObject[]>(`${environment2.host}`).toPromise();

};
