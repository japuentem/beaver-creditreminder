import { Injectable } from '@angular/core';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import { environment } from '../../environments/environment'; // Importar environment

@Injectable({
  providedIn: 'root',
})
export class CardsService {
  private firestore: firebase.firestore.Firestore;

  constructor() {
    this.firestore = firebase.firestore();
  }

  getCards() {
    return this.firestore.collection('cards').get();
  }

  addCard(card: any) {
    return this.firestore.collection('cards').add({
      ...card,
    });
  }

  updateCard(key: string, card: any) {
    return this.firestore.collection('cards').doc(key).update(card);
  }

  deleteCard(key: string) {
    return this.firestore.collection('cards').doc(key).delete();
  }
}
