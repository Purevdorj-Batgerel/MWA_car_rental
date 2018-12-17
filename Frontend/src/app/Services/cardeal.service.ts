import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CardealService {

  constructor(public http: HttpClient) { }

  getCarDealList() {
     return this.http.get('http://localhost:5000/API/CarDealList');
  }

  searchCarDealList() {
    return this.http.get('http://localhost:5000/API/CarDealList');
 }
}
