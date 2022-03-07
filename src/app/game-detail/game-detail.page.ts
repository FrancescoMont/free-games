import { Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { ApiService, DetailGame} from '../services/api.service';

@Component({
  selector: 'app-game-detail',
  templateUrl: './game-detail.page.html',
  styleUrls: ['./game-detail.page.scss'],
})
export class GameDetailPage implements OnInit {
  game: DetailGame;
  img = [];
  sliderOpts = {
    slidesPerView: 1.1,
    spaceBetween: 10,
    centeredSlides: true,
    speed: 300,
    autoplay: true
  };

  constructor(private route: ActivatedRoute, private api: ApiService, private modalCtrl: ModalController) { }

  async ngOnInit() {
    const id = this.route.snapshot.params.id;
    this.game = await this.api.getSingleGame(id);
    this.img = this.game.screenshots.map(item => item.image);
    console.log(this.img);
  }

}
