import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/index';
import { Bill } from '@app/dashboard/shared/models/bill.model';
import { BaseApi } from '@app/shared/core/base.api';

@Injectable()
export class BillService extends BaseApi {

  private readonly URL: string = 'bill';

  constructor(public http: HttpClient) {
    super(http);
  }

  getBill (): Observable<Bill> {
    return this.get(this.URL);
  }

  getCurrency (base: string = 'RUB'): Observable<any> {
    return this.http.get(`http://data.fixer.io/api/latest?access_key=d6d2661f4d6b3169f7334c6c38ae0ffd`);
  }
}
