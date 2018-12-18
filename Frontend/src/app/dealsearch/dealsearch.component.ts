import { Component, OnInit } from '@angular/core';
import { IDeal } from '../models/deal.model';
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

  cardealList: IDeal[];
  locations;

  typeParam: String = '0';
  fromLocationParam: String = '0';
  toLocationParam: String = '0';
  errorMsg: String = '';

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

    this.carDealService.getCarDealList(params).subscribe((data:any[]) => {

      if (data.length == 0) { this.errorMsg = 'Data was not found'; }
      else {
        this.errorMsg = '';
        this.cardealList = data;
      }

    });

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
    this.router.navigate(['deal-offer']);
  }
}
