import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '@app/shared/models/user.model';
import { Observable } from 'rxjs/index';
import { map } from 'rxjs/internal/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private readonly URL: string = `http://localhost:3000/users`;

  getUserByEmail (email: string): Observable<User> {
    return this.http.get<User>(`${this.URL}?email=${email}`)
      .pipe(map((user) => user[0] || undefined));
  }

  createUser (user: User): Observable<User> {
    return this.http.post<User>(`${this.URL}`, user);
  }

  constructor(private http: HttpClient) { }
}
