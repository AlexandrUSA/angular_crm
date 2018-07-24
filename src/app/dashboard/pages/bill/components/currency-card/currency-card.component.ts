import {Component, Input} from '@angular/core';

@Component({
  selector: 'crm-currency-card',
  templateUrl: './currency-card.component.html',
  styleUrls: ['./currency-card.component.scss']
})
export class CurrencyCardComponent {

  @Input() currency: any;
  private currencies: string[] = ['USD', 'RUB'];

}
