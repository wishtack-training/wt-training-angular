import { CommonModule } from '@angular/common';
import { Component, NgModule, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { catchError, tap } from 'rxjs/operators';
import { UserService } from '../user/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  errorMessage: string;
  loginForm = new FormGroup({
    email: new FormControl(),
    password: new FormControl()
  });

  constructor(private _userService: UserService) {}

  ngOnInit() {}

  logIn() {
    this.errorMessage = null;

    this._userService
      .logIn(this.loginForm.value)
      .pipe(
        tap(() => console.log('SUCCESS')),
        catchError(() => (this.errorMessage = 'Invalid credentials'))
      )
      .subscribe();
  }
}

@NgModule({
  declarations: [LoginComponent],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [LoginComponent]
})
export class LoginModule {}
