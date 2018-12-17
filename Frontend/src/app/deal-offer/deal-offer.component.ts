import { Component, OnInit, ViewChild } from '@angular/core';
import { DealtransferService } from '../services/dealtransfer.service';
import { CardealService } from '../services/cardeal.service';
import { IDeal } from '../models/deal.model';
import { Store, select, resultMemoize } from '@ngrx/store';
import { State } from '../reducers';


@Component({
  selector: 'app-deal-offer',
  templateUrl: './deal-offer.component.html',
  styleUrls: ['./deal-offer.component.css']
})
export class DealOfferComponent {

  public requestID: String = '';
  dealDetail: IDeal;
  username: String;
  dealID: String;
  msg: String;

  @ViewChild('offerprice') OfferPrice: Number = 0;

  constructor(private dealstranfer: DealtransferService, private carDealService: CardealService, private store: Store<State>) {
   
    this.msg = '' ; 
    this.store.pipe(select('user')).subscribe(value => {
      this.username = value.name;
    });

    this.store.pipe(select('deal')).subscribe(value => {
      this.dealID = value.selected_deal;
      this.carDealService.getDealDetail(value.selected_deal).subscribe((result: IDeal) => {
        this.dealDetail = result;
      })
    });

  }


  onSendOffer(price) {
    console.log(price.value);
  
    let bid = {
      _id: this.dealID,
       diverID: this.username,
      driverName: this.username,
       offerCost: price.value
      }

      this.carDealService.carDealOffer(bid).subscribe(data => {
        this.msg = 'Your offer was send' ; 
     });


  }

}
