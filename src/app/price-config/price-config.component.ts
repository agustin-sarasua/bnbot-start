import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-price-config',
  templateUrl: './price-config.component.html',
  styleUrls: ['./price-config.component.css']
})
export class PriceConfigComponent {
  currencies = ['USD', 'UY'];
  selectedCurrency: string;
  basePrice: number;
  weekendPrice: number;
  extraPercentage: number;
  isModified: boolean;

  form: FormGroup;
  metadata = {};

  constructor() {
    this.selectedCurrency = 'USD';
    this.basePrice = 0;
    this.weekendPrice = 0;
    this.extraPercentage = 0;
    this.isModified = false;

    this.form = new FormGroup({
      selectedCurrency: new FormControl('', Validators.required),
      basePrice: new FormControl('', Validators.required),
      weekendPrice: new FormControl('', Validators.required),
      extraPercentage: new FormControl('', Validators.required),
    });

  }

  onFieldChange(): void {
    this.isModified = true;
  }

  savePrices(): void {
    // Perform the logic to save the prices
    // You can access the selectedCurrency, basePrice, weekendPrice, and extraPercentage properties here
  }
}
