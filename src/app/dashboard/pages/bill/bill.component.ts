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

  private currency: any;
  private bill: Bill;
  isLoaded = false;

  constructor(private billService: BillService) { }

  onRefresh () {
    this.getData();
  }

  getData () {
    this.isLoaded = false;
      this.subscription = combineLatest(
      this.billService.getBill(),
      this.billService.getCurrency()
    ).subscribe(([bill, currency]: [Bill, any]) => {
      this.bill = bill;
      this.currency = currency;
      this.isLoaded = true;
    });
  }

  ngOnInit () {
    this.getData();
  }

  ngOnDestroy () {
    this.subscription.unsubscribe();
  }

}
