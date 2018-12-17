import { Component, OnInit } from '@angular/core';
import { CardealService } from '../services/cardeal.service';
import { LocationService } from '../services/location.service';
import { DealtransferService } from '../services/dealtransfer.service';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { State } from '../reducers';
import * as DealAction from '../actions/deal.actions';

@Component({
  selector: 'app-dealsearch',
  templateUrl: './dealsearch.component.html',
  styleUrls: ['./dealsearch.component.css']
})
export class DealsearchComponent implements OnInit {

  cardealList;
  locations;

  typeParam: String = 'All';
  fromLocationParam: String = 'All';
  toLocationParam: String = 'All';

  constructor(private carDealService: CardealService,
    private locationService: LocationService,
    private router: Router,
    private store: Store<State>,
    private transferService: DealtransferService) {
    this.locationService.getLocationList().subscribe(data => {
      this.locations = data;
    });
  }

  ngOnInit() {
  }

  onSearch() {

    const params = {
      dealtype: this.typeParam,
      locationfrom: this.fromLocationParam,
      locationto: this.toLocationParam
    };
    //  let bid ={
    //   _id: '5c16ab5167141416d0ff7efa',
    //   diverID: '12345',
    //   driverName: 'Huu Thai',
    //   offerCost: '123'
    //

    this.carDealService.getCarDealList(params).subscribe(data => {
      this.cardealList = data;
    });


    // this.carDealService.carDealOffer(bid).subscribe(data => {
    //   console.log(data);
    // });
  }

  onchangetype(event) {
    this.typeParam = event.target.value;
  }
  onchangeFrom(event) {
    this.fromLocationParam = event.target.value;
  }

  onchangeTo(event) {
    this.toLocationParam = event.target.value;
  }

  onOffer(event) {
    const requestID: string = event.target.value;
    console.log(requestID);
    this.store.dispatch(new DealAction.SelectDeal(requestID));
    // this.transferService.emitvalue(requestID);
    // console.log(requestID);
    this.router.navigate(['deal-offer']);
  }
}
