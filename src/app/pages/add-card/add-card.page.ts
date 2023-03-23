import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CardsService } from '../../services/cards.service';
import { Card } from '../interfaces/card.interface';

@Component({
  selector: 'app-add-card',
  templateUrl: './add-card.page.html',
  styleUrls: ['./add-card.page.scss'],
})
export class AddCardPage implements OnInit {
  newCard: Card = {
    name: '',
    number: '',
    expirationMonth: '',
    expirationYear: '',
    dueday: '',
    paymentday: '',
  };

  expirationMonth: string = '';
  expirationYear: string = '';

  validCard: boolean = true; // Definición de la propiedad validCard
  cardNumber: string = '';

  constructor(private cardsService: CardsService, private router: Router) {}

  ngOnInit() {}

  addCard() {
    // Actualización de las propiedades expirationMonth y expirationYear
    this.newCard.expirationMonth = this.expirationMonth;
    this.newCard.expirationYear = this.expirationYear;

    this.cardsService.addCard(this.newCard).then(() => {
      this.router.navigateByUrl('/cards');
    });
  }
}
