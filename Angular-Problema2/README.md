
## 2 -Proyecto de Conversión de Divisas
Este es un proyecto de conversión de divisas desarrollado con Angular. Permite a los usuarios convertir una cantidad de una moneda a otra utilizando tasas de cambio obtenidas de una API externa.
## Funcionalidades
- Conversión de monedas en tiempo real. 
- Soporte para múltiples monedas.
- Interfaz de usuario amigable.
- Modo oscuro y claro.

## Tecnologías Utilizadas

- [Angular](https://angular.io/) - Framework para construir aplicaciones web.
- [RxJS](https://rxjs.dev/) - Biblioteca para programación reactiva.
- [HttpClient](https://angular.io/api/common/http/HttpClient) - Módulo para hacer peticiones HTTP. 
- [API](https://api.exchangerate-api.com/v4/latest/) -API Conversion de divisas.

## Creaccion de Componente Service

1. Primero como principio cree un servicio con el comando :`ng generate service` 
2. Ya obtenido creado en el proyecto `divisa.service.ts` creamos la URL y en el constructor utilizamos el modulo `HttpClient`
esta se encargara de hacer la peticion `GET` a la API 

```typescript
private apiUrl = 'https://api.exchangerate-api.com/v4/latest/';

constructor(private http: HttpClient) {} // Aquí creo un módulo HttpClient

// Este método va a pedir una base de tipo string y retornará un Observable.
getRates(baseCurrency: string): Observable<any> {
  return this.http.get(`${this.apiUrl}${baseCurrency}`);
} 
```

### Configuracion Prividers  
Configuracion para configurar el componente app que utilizara un `HttpClient` en el archivo 
`app.config.ts` del componente . 

```typescript 
import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes),
    provideHttpClient() //Para utilizacion de HttpClient
  ] 
};
```
### Importamos los Modulos  
Para poder ser renderizado en el root
```typescript 
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
``` 
## Logica del Negocio 

```typescript 
export class AppComponent {
  ...
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
``` 


 
