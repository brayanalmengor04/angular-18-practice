import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms'; 
import { CommonModule } from '@angular/common';  // Esto sirve para agregar @if , @for en este caso los if ternarios darkmode
import { DivisaService } from './divisa.service'; 

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule],   // Importamos los CommondModule y FormsModule
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // Obtengo el valor den input que va ser 1 a principio 
  amount: number = 1;
  fromCurrency: string = 'USD';
  toCurrency: string = 'EUR';
  result: number = 0;
  rates: any = {};
  isDarkMode: boolean = false;
  constructor(private divisa: DivisaService) {}
  toggleDarkMode() {
    this.isDarkMode = !this.isDarkMode; // retorna true 
  }
  ngOnInit() {
    this.getRates();
  }
  getRates() { 
    // :'https://api.exchangerate-api.com/v4/latest/USD )
    this.divisa.getRates( this.fromCurrency ).subscribe((data) => {
      this.rates = data.rates;  // Obtengo todos al principio tomara  los rates USD
      this.convertCurrency(); // Hara la conversion de lo que tenga abajo (Defaiult : EUR)
    });
  }
  convertCurrency() {
    if (this.rates && this.rates[this.toCurrency]) { // this.rates["EUR"] obtengo el rate de la api solo osea solo  el EUR
      this.result = this.amount * this.rates[this.toCurrency]; // 1 USD * 0.911
    }
  } 
  // Seteara los cambios
  onCurrencyChange() {
    this.getRates();  
  }
}
