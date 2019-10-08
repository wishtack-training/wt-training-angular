import { CommonModule } from '@angular/common';
import { Component, NgModule, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

}

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule
  ],
  exports: [LoginComponent]
})
export class LoginModule {
}
