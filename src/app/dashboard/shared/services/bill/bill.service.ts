import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/index';
import { Bill } from '@app/dashboard/shared/models/bill.model';

@Injectable()
export class BillService {

  private readonly URL: string = 'http://localhost:3000/bill';

  constructor(private http: HttpClient) { }

  getBill (): Observable<Bill> {
    return this.http.get<Bill>(`${this.URL}`);
  }

  getCurrency (base: string = 'RUB'): Observable<any> {
    return this.http.get<any>(`http://data.fixer.io/api/latest?access_key=d6d2661f4d6b3169f7334c6c38ae0ffd`);
  }
}
