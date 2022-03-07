import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { DetailGame, RootObject} from '../services/api.service';
import { FavouriteService } from '../services/favourite.service';
@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.page.html',
  styleUrls: ['./favourites.page.scss'],
})
export class FavouritesPage implements OnInit {
  singleGame: DetailGame;
  searchTerm: string;
  favourites: RootObject[];
  constructor(private storage: Storage, private api: FavouriteService) { }

  async ngOnInit() {
    console.log(this.api.getFavourites());
    const favourites = await this.api.getFavourites();
    this.favourites = favourites;
  }

}
