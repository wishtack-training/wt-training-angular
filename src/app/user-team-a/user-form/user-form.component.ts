import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {User} from '../user';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'wt-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {
  @Input() user: User;

  userForm = new FormGroup({
    firstName: new FormControl(null, [Validators.required]),
    lastName: new FormControl(null, [Validators.required])
  });

  @Output() userSubmit = new EventEmitter<User>();
  @Output() cancel = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
    if (this.user) {
      this.userForm.patchValue({
        firstName: this.user.firstName,
        lastName: this.user.lastName
      });
    }
  }


  submitUser() {
    if (this.userForm.valid) {
      this.userSubmit.emit(Object.assign(
        {id: this.user ? this.user.id : null},
        this.userForm.value)
      );
      this.userForm.reset();
    }
  }

  cancelEdit() {
    this.cancel.emit();
  }
}
