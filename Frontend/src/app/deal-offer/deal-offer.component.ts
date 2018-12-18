import { Component, OnInit, ViewChild } from '@angular/core';
import { DealtransferService } from '../services/dealtransfer.service';
import { CardealService } from '../services/cardeal.service';
import { IDeal } from '../models/deal.model';
import { Store, select, resultMemoize } from '@ngrx/store';
import { State } from '../reducers';
import { } from 'google-maps';
import { isNumber } from 'util';

@Component({
  selector: 'app-deal-offer',
  templateUrl: './deal-offer.component.html',
  styleUrls: ['./deal-offer.component.css']
})
export class DealOfferComponent {
  @ViewChild('offerprice') OfferPrice: Number = 0;
  @ViewChild('gmap') gmapElement: any;
  map: google.maps.Map;

  public requestID: String = '';
  dealDetail: IDeal;
  username: String;
  dealID: String;
  msg: String;

  constructor(private carDealService: CardealService, private store: Store<State>) {
    this.msg = '';
    this.store.pipe(select('user')).subscribe(value => {
      this.username = value.name;
    });

    this.store.pipe(select('deal')).subscribe(value => {
      this.dealID = value.selected_deal;
      this.carDealService.getDealDetail(value.selected_deal).subscribe((result: IDeal) => {
        this.dealDetail = result;

        const mapProp = {
          center: new google.maps.LatLng(this.dealDetail.fromlocation.coordinate.x, this.dealDetail.fromlocation.coordinate.y),
          zoom: 15,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        this.map = new google.maps.Map(this.gmapElement.nativeElement, mapProp);
      })
    });
  }

  onSendOffer(price) {
    console.log(price.value);

    if (price.value === '' || isNaN(Number(price.value))) {
      this.msg = 'Please input offer price';
      return;
    }

    let bid = {
      _id: this.dealID,
      diverID: this.username,
      driverName: this.username,
      offerCost: price.value
    }

    this.carDealService.carDealOffer(bid).subscribe(data => {
      this.msg = 'Your offer was send';
    });
  }
}
