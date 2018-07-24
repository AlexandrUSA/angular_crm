import { Injectable } from '@angular/core';
import { StorageService } from '@app/shared/services/storage.service';
import { User } from '@app/shared/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private isAuthenticated = false;

  login (user: User): void {
    this.isAuthenticated = true;
    this.storage.set('user', JSON.stringify(user));
  }

  logout (): void {
    this.isAuthenticated = false;
    this.storage.clear();
  }

  isLoggedIn (): boolean {
    return this.isAuthenticated;
  }

  constructor(private storage: StorageService) {}
}
