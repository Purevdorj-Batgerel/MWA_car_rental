import { Component, OnInit } from '@angular/core';
import { CardealService } from './../Services/cardeal.service';

@Component({
  selector: 'app-deal-history',
  templateUrl: './deal-history.component.html',
  styleUrls: ['./deal-history.component.css']
})
export class DealHistoryComponent implements OnInit {




  cardealList;
  constructor(private carDealService: CardealService) {
    this.carDealService.getCarDealList().subscribe(data => {
      console.log(data);
      this.cardealList = data;
    });
  }
  ngOnInit() {
  }

}
