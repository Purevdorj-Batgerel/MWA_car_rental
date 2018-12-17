import { Component, OnInit } from '@angular/core';
import { HttpService } from '../Services/http.service';
import { IDeal } from '../models/deal.model';
import { Store, select } from '@ngrx/store';
import { State } from '../reducers';
import { State as DealState } from '../reducers/deal.reducer';

import { ViewChild } from '@angular/core';
import { } from 'google-maps';

@Component({
  selector: 'app-deal-detail',
  templateUrl: './deal-detail.component.html',
  styleUrls: ['./deal-detail.component.css']
})
export class DealDetailComponent implements OnInit {
  @ViewChild('gmap') gmapElement: any;
  map: google.maps.Map;

  carDeal: IDeal;
  deal: DealState;

  constructor(private http: HttpService, private store: Store<State>) {
    this.store.pipe(select('deal')).subscribe(value => this.deal = value);
    this.http.get(`http://localhost:5000/API/CarDeal/${this.deal.selected_deal}`).subscribe(result => {
      this.carDeal = result;
      console.log(this.carDeal);
    })
  }

  ngOnInit() {
    const mapProp = {
      center: new google.maps.LatLng(18.5793, 73.8143),
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    this.map = new google.maps.Map(this.gmapElement.nativeElement, mapProp);
  }
}
