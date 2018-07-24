import { Component, Input, OnInit } from '@angular/core';
import { Bill } from '@app/dashboard/shared/models/bill.model';

@Component({
  selector: 'crm-bill-card',
  templateUrl: './bill-card.component.html',
  styleUrls: ['./bill-card.component.scss']
})
export class BillCardComponent implements OnInit {

  @Input() bill: Bill;
  @Input() currency: any;

  dollar: number;
  rub: number;

  ngOnInit() {
    const { rates } = this.currency;
    this.dollar = rates['USD'];
    this.rub = rates['RUB'];
  }

}
