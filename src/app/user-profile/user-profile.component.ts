import { CommonModule } from '@angular/common';
import { Component, NgModule, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

}

@NgModule({
  declarations: [UserProfileComponent],
  imports: [
    CommonModule
  ],
  exports: [UserProfileComponent]
})
export class UserProfileModule {
}
