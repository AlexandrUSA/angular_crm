import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '@app/shared/models/user.model';
import { Observable } from 'rxjs/index';
import { map } from 'rxjs/internal/operators';
import { BaseApi } from '@app/shared/core/base.api';

@Injectable({
  providedIn: 'root'
})
export class UserService extends BaseApi {

  private readonly URL = 'users';

  getUserByEmail (email: string): Observable<User> {
    return this.get(`${this.URL}?email=${email}`)
      .pipe(map((user) => user[0] || undefined));
  }

  createUser (user: User): Observable<User> {
    return this.post(this.URL, user);
  }

  constructor(public http: HttpClient) {
    super(http);
  }
}
