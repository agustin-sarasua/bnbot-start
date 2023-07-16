import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { concatMap, tap, map } from 'rxjs/operators';

// Import the HttpClient for making API requests
import { HttpClient } from '@angular/common/http';

// Import AuthService from the Auth0 Angular SDK to get access to the user
import { AuthService } from '@auth0/auth0-angular';

import {BackendService} from '../backend.service'

@Component({
  selector: 'app-calendar-selection',
  templateUrl: './calendar-selection.component.html',
  styleUrls: ['./calendar-selection.component.css']
})
export class CalendarSelectionComponent {

  form: FormGroup;
  metadata = {};

  constructor(public auth: AuthService, private http: HttpClient, public backend: BackendService) {
    this.form = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      phoneNumber: new FormControl('', Validators.required),
    });
  }

}