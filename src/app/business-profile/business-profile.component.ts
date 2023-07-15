import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { concatMap, tap, map } from 'rxjs/operators';

// Import the HttpClient for making API requests
import { HttpClient } from '@angular/common/http';

// Import AuthService from the Auth0 Angular SDK to get access to the user
import { AuthService } from '@auth0/auth0-angular';

import {BackendService} from '../backend.service'
import { GlobalService } from '../global.service';

@Component({
  selector: 'app-business-profile',
  templateUrl: './business-profile.component.html',
  styleUrls: ['./business-profile.component.css']
})
export class BusinessProfileComponent implements OnInit{
  form: FormGroup;
  metadata = {};

  constructor(public auth: AuthService, private http: HttpClient, public backend: BackendService, public global: GlobalService) {
    this.form = new FormGroup({
      businessId: new FormControl('', [Validators.required, this.businessIdValidator]),
      title: new FormControl('', Validators.required),
    });
  }

  ngOnInit(): void {
    console.log(this.global.getBusiness());
  }

  businessIdValidator(control: AbstractControl): { [key: string]: boolean } | null {
    const valid = /^[a-zA-Z0-9.-]+$/.test(control.value);
    return valid ? null : { 'businessIdInvalid': true };
  }
}
