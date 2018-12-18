import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  constructor(public http: HttpClient) { }

  getLocationList() {
    return  this.http.get('http://localhost:5000/API/location/getAll');
 }

}
