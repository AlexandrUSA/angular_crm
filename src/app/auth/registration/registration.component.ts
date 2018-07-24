import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '@app/shared/services/user.service';
import { User } from '@app/shared/models/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'crm-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent {

  private form: FormGroup;

  private createForm () {
    this.form = new FormGroup({
      'name': new FormControl(null, [Validators.required, Validators.minLength(2), Validators.maxLength(20)]),
      'email': new FormControl(null, [Validators.required, Validators.email], this.checkEmail.bind(this)),
      'password': new FormControl(null, [Validators.required, Validators.minLength(4), Validators.maxLength(20)]),
      'accept': new FormControl(false, [Validators.requiredTrue]),
    });
  }

  /**
   * Асинхронный валидатор для проверки Email
   * @param {FormControl} control
   * @returns {Promise<any>}
   */
  private checkEmail(control: FormControl): Promise<any> {
    return new Promise((resolve, reject) => {
      this.user.getUserByEmail(control.value)
        .subscribe((user: User) => {
          if (user) {
            resolve({ exist: true });
          } else {
            resolve(null);
          }
        });
    });
  }

  constructor(
    private user: UserService,
    private router: Router
  ) {
    this.createForm();
  }

  isFieldInvalid (fieldName): boolean {
    const field = this.form.get(fieldName);
    return field.invalid && field.touched;
  }

  onSubmit () {
    const { email, password, name } = this.form.value;
    const newUser = new User(email, password, name);
    this.user.createUser(newUser)
      .subscribe(() => {
        this.router.navigate(['/login'], {
          queryParams: { auth: true }
        });
      });
  }

}
