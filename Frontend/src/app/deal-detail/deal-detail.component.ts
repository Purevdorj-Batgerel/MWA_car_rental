import { Component, OnInit } from '@angular/core';
import { HttpService } from '../services/http.service';
import { IDeal } from '../models/deal.model';
import { Store, select } from '@ngrx/store';
import { State } from '../reducers';
import { State as DealState } from '../reducers/deal.reducer';

import { ViewChild } from '@angular/core';
import { } from 'google-maps';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-deal-detail',
  templateUrl: './deal-detail.component.html',
  styleUrls: ['./deal-detail.component.css']
})
export class DealDetailComponent {
  @ViewChild('gmap') gmapElement: any;
  map: google.maps.Map;

  carDeal: IDeal;
  deal: DealState;

  constructor(private http: HttpService, private store: Store<State>, private route: ActivatedRoute) {
    // this.store.pipe(select('deal')).subscribe(value => this.deal = value);
    this.route.params.subscribe(params => {
      this.http.get(`http://localhost:5000/API/CarDeal/${params.id}`).subscribe(result => {
        this.carDeal = result;

        const mapProp = {
          center: new google.maps.LatLng(this.carDeal.fromlocation.coordinate.x, this.carDeal.fromlocation.coordinate.y),
          zoom: 15,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        this.map = new google.maps.Map(this.gmapElement.nativeElement, mapProp);
      })
    });
  }

  onClick(event) {
    const offerId = event.target.getAttribute("btnid");
    this.http.patch(`http://localhost:5000/API/Offer/Confirm/${offerId}`, {}).subscribe(result => {
      console.log(result);
      this.carDeal = result;
    })
  }
}
