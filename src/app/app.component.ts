import { Component, OnInit, Output } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { Router } from '@angular/router';
import { MenuController, ToastController } from '@ionic/angular';
import { ApiService } from './services/api.service';



@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {

  constructor(private storage: Storage, private router: Router, private menu: MenuController, private api: ApiService,
     private toastController: ToastController,) {}
  async ngOnInit() {
    // await this.storage.create();
    // const sliderHasShowed: true | null = await this.storage.get('slider'); // true null
    // const path = sliderHasShowed ? '/home' : '/slider';
    // await this.router.navigate([path]);
    await this.storage.create();
    await this.router.navigate([await this.storage.get('slider') ? '/home' : '/slider']);
  }
  async presentToast(message: string, color: 'success' | 'danger' = 'success') {
    const toast = await this.toastController.create({
      message,
      duration: 2000,
      color,
    });
    toast.present();
  }
  logOut(){
    this.presentToast('logOut','danger');
    this.storage.set('login',false);
  }


  close(){
    this.menu.close('first');
  }
}
