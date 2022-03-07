import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.page.html',
  styleUrls: ['./slider.page.scss'],
})
export class SliderPage{

  constructor(private storage: Storage, private router: Router) { }

  async tutorialIsShowed() {
    await this.storage.set('slider', true);
    this.router.navigate(['signin']);
  }

}
