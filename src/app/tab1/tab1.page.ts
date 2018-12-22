import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  list =  ['Grocery List', 'Household Supplies'];
  num = 0;
  input: string;
  constructor(public alertCtrl: AlertController) {

  }
  goToList() {
    console.log('clicked: ');
  }

  async showPrompt() {
    const alert = await this.alertCtrl.create({
      header: 'Add List',
      inputs: [
        {
          name: 'name',
          type: 'text',
          placeholder: 'List Name',
        },

      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Ok',
          handler: (event) => {
            console.log(event);
            this.num++;
            this.list.push(event.name);
          }
        }
      ]
    });

    await alert.present();
  }
}
