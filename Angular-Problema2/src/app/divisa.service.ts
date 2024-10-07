// divisa.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DivisaService {

  /**
   *  Aqui paso la url de la api luego en el constructor hago un modulo HttpCliente 
   * que sirve para hacer peticiones HttpsCliente  
   * por ejemplo de la api  pasame el formato monera:  
   * 
   * https://api.exchangerate-api.com/v4/latest/USD'
   */
  private apiUrl = 'https://api.exchangerate-api.com/v4/latest/'; 
  constructor(private http: HttpClient) {} // Aqui creo un moduls

  // Va pedir una base type string y va retornar un observable .
  getRates(baseCurrency: string): Observable<any> {
    return this.http.get(`${this.apiUrl}${baseCurrency}`);
  }
}
