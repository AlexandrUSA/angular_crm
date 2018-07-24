import { AfterContentInit, Component, OnDestroy, OnInit } from '@angular/core';
import { AuthService } from '@app/shared/services/auth.service';
import { Router } from '@angular/router';
import { StorageService } from '@app/shared/services/storage.service';

@Component({
  selector: 'crm-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnDestroy, AfterContentInit, OnInit {

  date: Date = new Date();
  user: User;

  private interval: Function | null;

  constructor(
    private authService: AuthService,
    private router: Router,
    private storage: StorageService
  ) {}

  makeLogout () {
    this.authService.logout();
    this.router.navigate(['login']);
  }

  ngOnInit () {
    this.user = JSON.parse(this.storage.get('user'));
  }

  ngAfterContentInit () {
    this.interval = setInterval(() => this.date = new Date(), 1000);
  }

  ngOnDestroy () {
    clearInterval(this.interval);
  }

}
