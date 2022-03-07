import { Component, OnInit,ViewChild} from '@angular/core';
import { ActionSheetController} from '@ionic/angular';
import { ApiService, DetailGame, RootObject} from '../services/api.service';
import { Storage } from '@ionic/storage';
import { IonInfiniteScroll } from '@ionic/angular';
import { FavouriteService } from '../services/favourite.service';
interface RefresherEventDetail {
  complete(): void;
}


interface RefresherCustomEvent extends CustomEvent {
  detail: RefresherEventDetail;
  target: HTMLIonRefresherElement;
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;

  tags= ['mmo','mmorpg','shooter','strategy',
  'moba','battleroyal','card','racing','sports','social','fighting'];
  games: object = [];
  searchTerm: string;
  singleGame: DetailGame;
  favGame: RootObject;

  constructor(public storage: Storage, public api: ApiService ,
    public actionSheetController: ActionSheetController, public favourite: FavouriteService) {}

  async ngOnInit() {
      console.log(this.api.getGames());
      const obj = await this.api.getGames();
      console.log('obj:', obj);
      this.games = obj;
  }

  async getGameByPlatform(platform: string) {
    const obj = await this.api.gameByPlatform(platform);
    console.log('obj:', obj, platform);
    this.games = obj;
  }

  async multipleTags(tags: string[]) {
    if(tags.length === 0 ){
      return this.games = await this.api.getGames();
    }
    const obj = await this.api.multipleTags(tags.join('.'));
    console.log('obj:', obj, tags);
    this.games = obj;
  }

  itemSelected(game: RootObject){
    this.favGame = game;
    console.log(game);
  }

  async addToFavourites() {
    const favGame = this.favGame;
    console.log(favGame);
    await this.favourite.addToFavourites(favGame);
  }


  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'PlatForm',
      cssClass: 'my-custom-class',
      buttons: [{
        text: 'Pc (Windows)',
        icon: 'logo-windows',
        handler: async () => {
         await this.getGameByPlatform('pc') ;
        }
      }, {
        text: 'Browser (web)',
        icon: 'logo-chrome',
        handler: async () => {
          await this.getGameByPlatform('browser') ;
        }
      }, {
        text: 'All Platform',
        icon: 'caret-forward-circle',
        handler: async () => {
          await this.getGameByPlatform('all') ;
        }
      },
       {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  }
  async doRefresh(event: RefresherCustomEvent) {
    this.games = [];
    this.games = await this.api.getGames();
    event.target.complete();
  }
}

