import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-business-profile',
  templateUrl: './business-profile.component.html',
  styleUrls: ['./business-profile.component.css']
})
export class BusinessProfileComponent {
  form: FormGroup;

  constructor() {
    this.form = new FormGroup({
      businessId: new FormControl('', [Validators.required, this.businessIdValidator]),
      title: new FormControl('', Validators.required),
      address: new FormControl('', Validators.required),
      instructions: new FormControl('', Validators.required)
    });
  }

  businessIdValidator(control: AbstractControl): { [key: string]: boolean } | null {
    const valid = /^[a-zA-Z0-9.-]+$/.test(control.value);
    return valid ? null : { 'businessIdInvalid': true };
  }
}
