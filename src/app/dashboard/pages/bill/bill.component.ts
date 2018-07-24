import {Component, OnDestroy, OnInit} from '@angular/core';
import {combineLatest, Subscription} from 'rxjs/index';

import { BillService } from '@app/dashboard/shared/services/bill/bill.service';
import { Bill } from '@app/dashboard/shared/models/bill.model';

@Component({
  selector: 'crm-bill',
  templateUrl: './bill.component.html',
  styleUrls: ['./bill.component.scss']
})
export class BillComponent implements OnInit, OnDestroy {

  private subscription: Subscription;

  constructor(private billService: BillService) { }

  ngOnInit () {
    this.subscription = combineLatest(
      this.billService.getBill(),
      this.billService.getCurrency()
    ).subscribe((data: [Bill, any]) => console.log(data));
  }

  ngOnDestroy () {
    this.subscription.unsubscribe();
  }

}
