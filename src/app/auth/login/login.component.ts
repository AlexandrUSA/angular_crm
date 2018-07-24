import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from '@app/shared/models/user.model';
import { Message } from '@app/shared/models/message.model';
import { UserService } from '@app/shared/services/user.service';
import { AuthService } from '@app/shared/services/auth.service';

@Component({
  selector: 'crm-login',
  templateUrl: './login.component.html',
  styleUrls: [ './login.component.scss' ]
})
export class LoginComponent implements OnInit {

  private form: FormGroup;

  message: Message;

  constructor(
    private userService: UserService,
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  isFieldInvalid (fieldName): boolean {
    const field = this.form.get(fieldName);
    return field.invalid && field.touched;
  }

  private createForm (): void {
    this.form = new FormGroup({
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'password': new FormControl(null, [Validators.required, Validators.minLength(4), Validators.maxLength(20)])
    });
  }

  private parseUser (user: User): void {
    if (!user) {
      return this.showMessage('Пользователь не найден');
    }
    if (this.form.value.password !== user.password) {
      return this.showMessage('Не верный пароль');
    }
    this.authService.login(user);
    this.router.navigate(['dashboard/bill']);
  }

  private showMessage (message: string, type: string = 'danger'): void {
    this.message.text = message;
    this.message.type = type;
  }

  onSubmit () {
    this.message.text = '';
    this.userService.getUserByEmail(this.form.value.email)
    .subscribe((user: User) => this.parseUser(user));
  }

  ngOnInit() {
    this.message = new Message('danger', '');
    this.createForm();
    this.route.queryParams
      .subscribe((params: Params) => {
        if (params['auth']) {
          this.showMessage('Войдите со своими данными', 'success');
        }
      });
  }

}
