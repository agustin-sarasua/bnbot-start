import {Component, OnInit} from '@angular/core';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { FormGroup, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css'],
})
export class AddressComponent implements OnInit {
  myControl = new FormControl('');
  options: string[] = ['Mercedes', 'Montevideo', 'Punta del Este'];
  filteredOptions: Observable<string[]>;
  form: FormGroup;

  constructor(){
    this.form = new FormGroup({
      title: new FormControl('', Validators.required),
      address: new FormControl('', Validators.required),
      instructions: new FormControl('', Validators.required)
    });

    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '')),
    );
  }

  ngOnInit() {
    this.form = new FormGroup({
      title: new FormControl('', Validators.required),
      address: new FormControl('', Validators.required),
      instructions: new FormControl('', Validators.required)
    });

    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '')),
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }
}
