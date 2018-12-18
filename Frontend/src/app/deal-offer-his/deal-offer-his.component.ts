import { Component, OnInit } from '@angular/core';
import { HttpService } from '../services/http.service';
import { Store, select } from '@ngrx/store';
import { State } from '../reducers';
import { take } from 'rxjs/operators';
import { CardealService } from '../services/cardeal.service';

@Component({
  selector: 'app-deal-offer-his',
  templateUrl: './deal-offer-his.component.html',
  styleUrls: ['./deal-offer-his.component.css']
})
export class DealOfferHisComponent implements OnInit {

  carDealsList;

  constructor(private carDealService: CardealService, private store: Store<State>) { 
    this.store.pipe(select('user'), take(1)).subscribe(result => {
      // getting data from Back end

      let driver: any = { 'drivername': result.name};

      console.log(driver);

      this.carDealService.getOfferHistory(driver).subscribe(data => {
        console.log(data);
        this.carDealsList = data;
      })
    })
  }
  ngOnInit() {
  }

}
