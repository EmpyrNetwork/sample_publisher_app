import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'card-form',
  templateUrl: './card-form.component.html',
  styleUrls: ['./card-form.component.scss']
})
export class CardFormComponent {

  @Output() addPayment: EventEmitter<any> = new EventEmitter<any>();

  paymentType: String;
  cardNumber: String;
  addressZip: String;

  constructor() { }

  onAddPayment() {
    this.addPayment.emit({
      paymentType: this.paymentType,
      cardNumber: this.cardNumber,
      addressZip: this.addressZip
    });
  }
}