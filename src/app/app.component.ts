import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'wt-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'training';

  formGroup = new FormGroup({});

  formConfigList = [
    {
      name: 'title',
      type: 'input',
      validators: [
        'required',
        {
          type: 'minlength'
        }
      ]
    },
    {
      name: 'description',
      type: 'textarea'
    },
    {
      name: 'address',
      type: 'address'
    }
  ];

  constructor() {

    this.formConfigList.forEach(config => {
      this.formGroup.addControl(config.name, new FormControl());
    });

  }

}
