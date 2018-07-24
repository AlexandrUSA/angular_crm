import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs/index';

export class BaseApi {
  private readonly BASE_URL = `http://localhost:3000/`;
  constructor (public http: HttpClient) {}

  private getUrl (url: string = ''): string {
    return this.BASE_URL + url;
  }

  public get (url: string = ''): Observable<any> {
    return this.http.get<any>(this.getUrl(url));
  }

  public post (url: string = '', data: any = {}): Observable<any> {
    return this.http.post<any>(this.getUrl(url), data);
  }

  public put (url: string = '', data: any = {}): Observable<any> {
    return this.http.put<any>(this.getUrl(url), data);
  }
}
