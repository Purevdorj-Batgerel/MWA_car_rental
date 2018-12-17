import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CardealService {
  constructor(public http: HttpClient) { }

  getCarDealList(searchParams) {
    return this.http.post('http://localhost:5000/API/CarDealSearch', searchParams);
  }

  searchCarDealList() {
    return this.http.get('http://localhost:5000/API/CarDealList');
  }

  carDealOffer(OfferParams) {
    return this.http.patch('http://localhost:5000/API/OfferCost', OfferParams);
  }

  getDealDetail(reqID:string) {
    return this.http.get('http://localhost:5000/API/CarDeal/' + reqID);
  }

}
