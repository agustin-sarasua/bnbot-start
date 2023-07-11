import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { concatMap, tap, map } from 'rxjs/operators';

// Import the HttpClient for making API requests
import { HttpClient } from '@angular/common/http';

// Import AuthService from the Auth0 Angular SDK to get access to the user
import { AuthService } from '@auth0/auth0-angular';

import {BackendService} from '../backend.service'

@Component({
  selector: 'app-business-profile',
  templateUrl: './business-profile.component.html',
  styleUrls: ['./business-profile.component.css']
})
export class BusinessProfileComponent implements OnInit{
  form: FormGroup;
  metadata = {};

  constructor(public auth: AuthService, private http: HttpClient, public backend: BackendService) {
    this.form = new FormGroup({
      businessId: new FormControl('', [Validators.required, this.businessIdValidator]),
      title: new FormControl('', Validators.required),
      // address: new FormControl('', Validators.required),
      // instructions: new FormControl('', Validators.required)
    });
  }

  ngOnInit(): void {
    this.auth.user$
    .pipe(
      concatMap((user) =>
        // Use HttpClient to make the call
        this.http.get(
          encodeURI(`https://dev-szxtl072nd0t8rsr.us.auth0.com/api/v2/users/${user?.sub}`)
        )
      ),
      map((user: any) => user.user_metadata),
      tap((meta) => (this.metadata = meta))
    )
    .subscribe();

    this.backend.getBusinessInfo().subscribe(data => {
      console.log(data);
    }, error => {
      console.error('Error:', error);
    });
  }

  businessIdValidator(control: AbstractControl): { [key: string]: boolean } | null {
    const valid = /^[a-zA-Z0-9.-]+$/.test(control.value);
    return valid ? null : { 'businessIdInvalid': true };
  }
}
