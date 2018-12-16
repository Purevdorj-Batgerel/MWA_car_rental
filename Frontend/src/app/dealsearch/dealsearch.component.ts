import { Component, OnInit } from '@angular/core';
import { CardealService } from './../Services/cardeal.service';
import { LocationService } from './../Services/location.service';
import { ILocation } from '../models/location.model';


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

  constructor(private carDealService: CardealService, private locationService: LocationService) {
    this.locationService.getLocationList().subscribe(data => {
      this.locations = data;
    });
  }

  ngOnInit() {
  }

  onSearch() {
     let params = {
       dealtype : this.typeParam,
       locationfrom:  this.fromLocationParam,
       locationto: this.toLocationParam 
     };


     let bid ={
      _id: '5c16ab5167141416d0ff7efa',
      diverID: '12345',
      driverName: 'Huu Thai',
      offerCost: '123'
   }

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

  onOffer(event)
  {
    console.log(event.target.value);
    
  }
}
