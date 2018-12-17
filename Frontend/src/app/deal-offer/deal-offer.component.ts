import { Component, OnInit, ViewChild } from '@angular/core';
import { DealtransferService } from './../Services/dealtransfer.service';
import { CardealService } from './../Services/cardeal.service';
import { IDeal } from '../models/deal.model';
import { Store, select } from '@ngrx/store';
import { State } from '../reducers';


@Component({
  selector: 'app-deal-offer',
  templateUrl: './deal-offer.component.html',
  styleUrls: ['./deal-offer.component.css']
})
export class DealOfferComponent {

  public requestID: String = '';
  dealDetail: IDeal;

  @ViewChild('offerprice') OfferPrice: Number = 0;

  constructor(private dealstranfer: DealtransferService, private carDealService: CardealService, private store: Store<State>) {
    this.store.pipe(select('deal')).subscribe(value => this.dealDetail = value);
    // this.carDealService.getDealDetail('5c17efac11fb6a0ae84a197a').subscribe((result) => {
    //   this.dealDetail = result;
    //   console.log(this.dealDetail);
    // });

    // this.dealstranfer.emitter.subscribe(reqID => {
    //   this.requestID = reqID;
    //   console.log(this.requestID);

    // })
  }


  onSendOffer(price) {
    console.log(price.value);
  }

}
