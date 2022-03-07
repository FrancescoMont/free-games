import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GameDetailPageRoutingModule } from './game-detail-routing.module';

import { GameDetailPage } from './game-detail.page';
import { SwiperModule } from 'swiper/angular';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GameDetailPageRoutingModule,
    SwiperModule
  ],
  declarations: [GameDetailPage]
})
export class GameDetailPageModule {}
