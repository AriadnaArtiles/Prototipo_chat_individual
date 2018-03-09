import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RoomPage } from '../room/room';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  data = { nickname: "" };
  constructor(public navCtrl: NavController) {

  }
  enterNickname() {
    this.navCtrl.setRoot(RoomPage, {
      nickname: this.data.nickname
    });
  }

}
