import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public formGroup: FormGroup;

  constructor(fb: FormBuilder) {
    this.formGroup = fb.group({
      'email': '',
      'password': ''
    })
  }

  logForm() {
    console.log(this.formGroup);
  }

}
