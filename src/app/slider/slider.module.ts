import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SwiperModule } from 'swiper/angular';
import { IonicModule } from '@ionic/angular';

import { SliderPageRoutingModule } from './slider-routing.module';

import { SliderPage } from './slider.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SliderPageRoutingModule,
    SwiperModule
  ],
  declarations: [SliderPage]
})
export class SliderPageModule {}
