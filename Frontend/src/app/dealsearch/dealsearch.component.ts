import { Component, OnInit } from '@angular/core';
import { CardealService } from './../Services/cardeal.service';

@Component({
  selector: 'app-dealsearch',
  templateUrl: './dealsearch.component.html',
  styleUrls: ['./dealsearch.component.css']
})
export class DealsearchComponent implements OnInit {

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
