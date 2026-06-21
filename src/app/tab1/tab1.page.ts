import { Component } from '@angular/core';
import {
  IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonButton, IonIcon,
  IonRow, IonCol, IonAvatar, IonText, IonFabButton,
  IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { notificationsOutline, add } from 'ionicons/icons';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [
    IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonButton, IonIcon,
    IonRow, IonCol, IonAvatar, IonText, IonFabButton,
    IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent
  ],
})
export class Tab1Page {
  constructor() {
    // Registramos os ícones usados na tela inicial
    addIcons({ notificationsOutline, add });
  }
}
