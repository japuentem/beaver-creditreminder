import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { CardsService } from '../../services/cards.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.page.html',
  styleUrls: ['./cards.page.scss'],
})
export class CardsPage implements OnInit {
  cards: any[] = [];
  newCard: any = {}; // Agregar esta línea para definir la propiedad newCard
  dia_actual: number = new Date().getDate();
  showCard: boolean = false;

  constructor(
    private cardsService: CardsService,
    private router: Router,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {}

  ionViewWillEnter() {
    this.getCard();
  }

  getCard() {
    this.cardsService.getCards().then((querySnapshot) => {
      this.cards = [];
      querySnapshot.forEach((doc) => {
        const cardData = doc.data();
        if (cardData) {
          this.cards.push({ id: doc.id, ...cardData });
        }
      });
    });
  }

  goToAddCard() {
    this.router.navigateByUrl('/add-card');
  }

  deleteCard(cardId: string) {
    this.cardsService.deleteCard(cardId);
    this.getCard();
  }

  showCardNumber(show: boolean) {
    this.showCard = show;
    this.cdr.detectChanges();
  }
}
